import { notFound } from 'next/navigation';
import { getUserByUsername } from '@/lib/user-service';
import { isFollowingUser } from '@/lib/follow-service';
import { Actions } from './_components/action';
import { Button } from '@/components/ui/button';
import { isBlockedByUser } from '@/lib/block-service';

type UserPageProps = {
  params: {
    username: string;
  };
};

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isBlockedByThisUser = await isBlockedByUser(user.id);
  const isFollowing = await isFollowingUser(user.id);

  if (isBlockedByThisUser) {
    notFound();
  }
  return (
    <div className='flex flex-col space-y-2'>
      <p>username: {user.username}</p>
      <p>is following: {`${isFollowing}`}</p>
      <Actions
        isBlockedByUser={isBlockedByThisUser}
        isFollowing={isFollowing}
        userId={user.id}
        username={user.username}
      />
    </div>
  );
};

export default UserPage;
