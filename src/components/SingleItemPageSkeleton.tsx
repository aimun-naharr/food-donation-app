import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SingleItemPageSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] w-full rounded-xl" />
      <div className="space-y-2 flex md:flex-row flex-col gap-2 md:gap-0 md:justify-between">
        <div className="flex flex-col gap-2 max-w-4xl w-full">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-[120px] w-full" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div>
          <Skeleton className="h-[60px] w-[120px]" />
        </div>
      </div>
    </div>
  );
}
