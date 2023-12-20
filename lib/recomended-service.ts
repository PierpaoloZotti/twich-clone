import { db } from "@/lib/db";
import { getSelf } from "./auth-service";

export const getRecomended = async () => {
  //  Insert a timer of 1 second to simulate a slow connection

  let userId; // Create a a variable to avoid undefined errors
  try {
    // Put on a try catch block to avoid errors when the user is not logged in
    const self = await getSelf();
    userId = self.id;
  } catch (error) {
    userId = null;
  }

  let users = []; // Create a variable to store the users and avoid undefined errors
  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
