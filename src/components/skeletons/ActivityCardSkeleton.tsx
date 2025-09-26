
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ActivityCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
      <div className="rounded-[12px] border border-[#E3E3E3] px-[6px] pt-[6px] pb-3 bg-white">
        {/* Image */}
        <div className="relative w-full h-[223px]">
          <Skeleton className="rounded-[9px]" height="100%" width="100%" />
        </div>

        <div className="mt-2 px-2">
          {/* Title */}
          <Skeleton width="70%" height={20} className="mb-2 rounded-[6px]" />

          {/* Location */}
          <div className="flex items-center gap-2 mb-2">
            <Skeleton circle width={20} height={20} />
            <Skeleton width="50%" height={16} />
          </div>

          {/* Info row */}
          <div className="flex flex-wrap gap-2 mb-2">
            <Skeleton width={80} height={24} />
            <Skeleton width={80} height={24} />
            <Skeleton width={80} height={24} />
            <Skeleton width={100} height={24} />
          </div>

          {/* Price */}
          <Skeleton width="40%" height={20} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ActivityCardSkeleton;
