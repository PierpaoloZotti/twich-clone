import { db } from './db';

export const getStreamById = async (userId: string) => {
  return await db.stream.findUnique({
    where: {
      userId,
    },
  });
};
