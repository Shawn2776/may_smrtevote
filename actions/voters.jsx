"use server";

import { db } from "@/lib/db";

export const getVotersByUserId = async (skip = 0, take = 4) => {
  try {
    const voters = await db.voter.findMany({
      skip,
      take,
      where: {
        electionId: "clwn8eb4e0001h4bj09x1dudf",
      },
      orderBy: {
        name: "desc",
      },
    });

    return voters;
  } catch (error) {
    console.log(error);
  }
};
