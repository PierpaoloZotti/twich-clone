'use client';
import { Button } from '@/components/ui/button';
import { onFollow, onUnfollow } from '@/actions/follow';
import { use, useTransition } from 'react';
import { toast } from 'sonner';
import { onBlock } from '@/actions/block';
import { isBlockedByUser } from '@/lib/block-service';

type ActionProps = {
  isBlockedByUser: boolean;
  isFollowing: boolean;
  userId: string;
  username: string;
};

export const Actions = ({
  isFollowing,
  isBlockedByUser,
  userId,
  username,
}: ActionProps) => {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          toast.success(`You are now following ${data.following.username}!`);
        })
        .catch(() => {
          toast.error('Something went wrong!');
        });
    });
  };
  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          toast.success(
            `You are no longer following ${data.following.username}!`,
          );
        })
        .catch(() => {
          toast.error('Something went wrong!');
        });
    });
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => {
          toast.success(`You have blocked ${data.blocked.username}!`);
        })
        .catch(() => {
          toast.error('Something went wrong!');
        });
    });
  };
  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };
  return (
    <>
      <Button
        disabled={isPending || isBlockedByUser}
        variant={isFollowing ? 'destructive' : 'primary'}
        onClick={onClick}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </Button>
      <Button
        disabled={!isFollowing || isBlockedByUser}
        onClick={handleBlock}
      >
        {isBlockedByUser ? 'Unblock' : 'Block'}
      </Button>
    </>
  );
};
