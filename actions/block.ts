'use server';

import { blockUser, unblockUser } from '@/lib/block-service';
import { revalidatePath } from 'next/cache';

export const onBlock = async (id: string) => {
  //TODO: implement to disconnect from livestream
  //TODO: implement the ability to kick the guest

  try {
    const blockedUser = await blockUser(id);
    revalidatePath('/');

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }

    return blockedUser;
  } catch (error) {
    throw new Error('Internal Error');
  }
};

export const onUnblock = async (id: string) => {
  const unblockedUser = await unblockUser(id);
  revalidatePath('/');

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }

  return unblockedUser;
};
