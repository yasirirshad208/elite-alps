"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AccommodationCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
      <div className="rounded-[12px] bg-white border border-[#E3E3E3] p-[6px]">
        {/* Image */}
        <div className="relative h-[223px] w-full">
          <Skeleton className="w-full h-full rounded-[9px]" />
        </div>

        <div className="mt-3 px-2">
          {/* Title */}
          <Skeleton width="70%" height={20} className="mb-2" />

          {/* Location */}
          <Skeleton width="50%" height={16} className="mb-3" />

          {/* Info row (persons, beds, area OR stars) */}
          <div className="flex gap-2 mb-3">
            <Skeleton width={70} height={28} className="rounded-[6px]" />
            <Skeleton width={70} height={28} className="rounded-[6px]" />
            <Skeleton width={70} height={28} className="rounded-[6px]" />
          </div>

          <div className="h-[1px] w-full bg-[#e3e3e3] mb-3"></div>

          {/* Start From */}
          <Skeleton width="40%" height={16} className="mb-2" />

          {/* Price */}
          <Skeleton width="60%" height={22} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default AccommodationCardSkeleton;
