import { db } from './db';
import { getSelf } from './auth-service';

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();
    const followedUsers = db.follow.findMany({
      where: {
        followerId: self.id,
      },
      include: {
        following: true,
      },
    });
    return followedUsers;
  } catch {
    return [];
  }
};

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
      where: { id },
    });
    if (!otherUser) {
      /* throw new Error("User not found"); */
      return false;
    }
    if (otherUser.id === self.id) {
      return true;
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });
    return !!existingFollow; // !! converts to boolean
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: { id },
  });

  if (!otherUser) {
    throw new Error('User not found');
  } else if (otherUser.id === self.id) {
    throw new Error('Cannot follow yourself');
  } else {
    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });
    if (existingFollow) {
      throw new Error('Already following user');
    } else {
      return db.follow.create({
        data: {
          followerId: self.id,
          followingId: otherUser.id,
        },
        include: {
          following: true,
          follower: true,
        },
      });
    }
  }
};

export const unfollowUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: { id },
  });

  if (!otherUser) {
    throw new Error('User not found');
  } else if (otherUser.id === self.id) {
    throw new Error('Cannot unfollow yourself');
  } else {
    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });
    if (!existingFollow) {
      throw new Error('Not following user');
    } else {
      return db.follow.delete({
        where: {
          id: existingFollow.id,
        },
        include: {
          following: true,
          follower: true,
        },
      });
    }
  }
};
