import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userWithEmail) {
      return res
        .status(401)
        .json({ errorMessage: "E-mail or password is invalid" });
    }

    const isMatch = await bcrypt.compare(password, userWithEmail.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ errorMessage: "E-mail or password is invalid" });
    }

    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: userWithEmail.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime("24hr")
      .sign(secret);

    return res.status(200).json({ token });
  }
  return res.status(404).json({ message: "Unknown end point" });
}
