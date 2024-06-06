"use server";

import { db } from "@/lib/db";

export const getElectionsByUserId = async (skip = 0, take = 4) => {
  try {
    const elections = await db.election.findMany({
      skip,
      take,
      where: {
        userId: "clwefk1jx000cq1a8xdysqqea",
      },
      orderBy: {
        name: "desc",
      },
      include: {
        Ballot: {
          select: {
            id: true,
            Question: true,
            Candidate: true,
          },
        },
      },
    });

    return elections;
  } catch (error) {
    console.log(error);
  }
};
