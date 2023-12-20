"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useState, useEffect } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecomendedSkeleton } from "./recomended";
import { useIsClient } from "usehooks-ts";
interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  /* const [isClient, setIsClient] = useState(false); // We can use the useHooks library
  useEffect(() => {
    setIsClient(true);
  }, []); */
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
        <ToggleSkeleton />
        <RecomendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col h-full bg-background border-r border-[#2d2e35] z-50",
        collapsed ? "w-[70px]" : "w-60"
      )}
    >
      {children}
    </aside>
  );
};
