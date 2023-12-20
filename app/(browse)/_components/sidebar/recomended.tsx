"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import Image from "next/image";
import { UserItem, UserItemSkeleton } from "./user-item";

type RecomendedProps = {
  // data from User
  data: User[];
};

export const Recomended = ({ data }: RecomendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel: boolean = !collapsed && data.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recomended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecomendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
