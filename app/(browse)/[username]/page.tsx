import { notFound } from "next/navigation";
import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { Actions } from "./_components/action";
import { Button } from "@/components/ui/button";

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

  const isFollowing = await isFollowingUser(user.id);
  return (
    <div className="flex flex-col space-y-2">
      <p>username: {user.username}</p>
      <p>is following: {`${isFollowing}`}</p>
      <Actions />
    </div>
  );
};

export default UserPage;
