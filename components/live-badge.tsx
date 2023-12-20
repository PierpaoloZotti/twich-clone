import { cn } from "@/lib/utils";
import { RadioTower } from "lucide-react";

type LiveBadgeProps = {
  className?: string;
};

export const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide",
        className
      )}
    >
      <RadioTower className="h-4 w-4 animate-pulse" />
    </div>
  );
};
