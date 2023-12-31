import { setCookie } from "cookies-next";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;
    const errors: string[] = [];
    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First Name is Invalid",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Last Name is Invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is Invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone Number is invalid",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        errorMessage: "City is Invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is not strong enough!",
      },
    ];
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });
    if (errors.length) {
      res.status(400).json({ errorMessage: errors[0] });
    }
    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: "E-mail already registered." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        email,
        city,
        phone,
      },
    });

    const alg = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 60 * 24 });

    return res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      city: user.city,
    });
  }
  return res.status(404).json({ message: "Unknown end point" });
}
