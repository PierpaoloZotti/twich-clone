"use client";
import { Button } from "@/components/ui/button";
import { onFollow } from "@/actions/follow";
export const Actions = () => {
  return (
    <Button variant="primary" onClick={() => onFollow("123")}>
      Follow
    </Button>
  );
};
