'use client';
import { Button } from '@/components/ui/button';
import { onFollow, onUnfollow } from '@/actions/follow';
import { use, useTransition } from 'react';
import { toast } from 'sonner';

type ActionProps = {
  isFollowing: boolean;
  userId: string;
  username: string;
};

export const Actions = ({ isFollowing, userId, username }: ActionProps) => {
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
  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };
  return (
    <Button
      disabled={isPending}
      variant={isFollowing ? 'destructive' : 'primary'}
      onClick={onClick}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};
