import { partySize } from "./../../../../data/partySize";
import { NextApiRequest, NextApiResponse } from "next";
import { times } from "../../../../data";
import { PrismaClient } from "@prisma/client";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug, day, time, partySize } = req.query as {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  };
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return res.status(400).json({
      errorMessage: "Invalid Data Provided.",
    });
  }

  const searchTimesWithTables = await findAvailableTables({
    day,
    time,
    res,
    restaurant,
  });

  if (!searchTimesWithTables)
    return res.status(400).json({ errorMessage: "Invalid Data Provided" });

  if (!day || !time || !partySize) {
    return res.status(400).json({
      errorMessage: "Invalid Data Provided.",
    });
  }

  const availability = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.open_time}`);
      const timeIsAfterClosingHour =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.close_time}`);

      return timeIsAfterClosingHour && timeIsAfterOpeningHour;
    });

  return res.json(availability);
}
