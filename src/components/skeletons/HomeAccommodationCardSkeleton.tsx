"use client"
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeAccommodationCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
      <div className="rounded-[12px] border border-[#E3E3E3] p-[6px]">
        {/* Image Skeleton */}
        <div className="relative z-0 w-full md:h-[360px] sm:h-[300px] h-[200px]">
          <Skeleton className="w-full h-full rounded-[9px]" />
        </div>

        <div className="mt-2 px-2">
          {/* Title */}
          <Skeleton width="70%" height={20} />

          {/* Location */}
          <div className="flex items-center gap-1 mt-2">
            <Skeleton width="50%" height={16} />
          </div>

          {/* Icons Row */}
          <div className="flex gap-2 mt-3">
            <Skeleton width={70} height={28} className="rounded-[4px]" />
            <Skeleton width={70} height={28} className="rounded-[4px]" />
            <Skeleton width={70} height={28} className="rounded-[4px]" />
          </div>

          {/* Divider */}
          <div className="mt-2.5 mb-1 h-[1px] w-full bg-[#e3e3e3]" />

          {/* Price */}
          <Skeleton width="40%" height={20} />
          <Skeleton width="60%" height={22} className="mt-2" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HomeAccommodationCardSkeleton;
