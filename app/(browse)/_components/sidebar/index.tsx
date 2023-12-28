import { getRecomended } from '@/lib/recomended-service';
import { Recomended, RecomendedSkeleton } from './recomended';
import Toggle, { ToggleSkeleton } from './toggle';
import { Wrapper } from './wrapper';
import { Following, FollowingSkeleton } from './followed';
import { getFollowedUsers } from '@/lib/follow-service';

const Sidebar = async () => {
  const recomended = await getRecomended();
  const following = await getFollowedUsers();
  console.log(following);
  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0 mb-10'>
        <Following data={following} />
        <Recomended data={recomended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

export const SidebarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-colw-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50'>
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecomendedSkeleton />
    </aside>
  );
};
