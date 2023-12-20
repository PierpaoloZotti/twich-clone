import { getRecomended } from "@/lib/recomended-service";
import { Recomended, RecomendedSkeleton } from "./recomended";
import Toggle, { ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";

const Sidebar = async () => {
  const recomended = await getRecomended();
  return (
    <Wrapper>
      <Toggle />
      <div className="spacey4 pt-4 lg:pt-0">
        <Recomended data={recomended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-colw-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <RecomendedSkeleton />
    </aside>
  );
};
