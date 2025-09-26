"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurantCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
    <div className="border p-[6px] border-[#e3e3e3] rounded-[12px]">
      {/* Image skeleton */}
      <div className="relative">
        <Skeleton
          className="rounded-[12px]"
          height={223}
          width="100%"
        />
      </div>

      {/* Content skeleton */}
      <div className="mt-2 p-2">
        {/* Title */}
        <Skeleton width="70%" height={24} className="mb-3 rounded-[8px]" />

        {/* Icons row */}
        <div className="flex items-center gap-4 mb-3">
          <Skeleton width={80} height={18} />
          <Skeleton width={80} height={18} />
        </div>

        {/* Cuisine */}
        <div className="flex items-center gap-2 mb-3">
          <Skeleton circle width={20} height={20} />
          <Skeleton width={140} height={18} />
        </div>

        {/* Divider */}
        <div className="border-[#e3e3e3] border-t w-full my-2"></div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Skeleton circle width={20} height={20} />
          <Skeleton width={40} height={18} />
          <Skeleton width={80} height={18} />
        </div>
      </div>
    </div>
    </SkeletonTheme>
  );
};

export default RestaurantCardSkeleton;
