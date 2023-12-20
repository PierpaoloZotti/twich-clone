import { db } from "./db";

export const getUserByUsername = async (username: string) => {
  return await db.user.findUnique({
    where: { username },
  });
};
