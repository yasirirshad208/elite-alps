"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
      <div className="p-3 rounded-[12px] bg-white border border-[#e3e3e3]">
        {/* Image */}
        <div className="relative md:h-[322px] sm:h-[280px] h-[230px] w-full">
          <Skeleton className="w-full h-full rounded-[4px]" />
        </div>

        <div className="mt-4.5 px-2">
          {/* Category */}
          <Skeleton width={90} height={28} className="rounded-[24px]" />

          {/* Title */}
          <div className="mt-3">
            <Skeleton width="80%" height={20} />
          </div>

          {/* Description */}
          <div className="mt-2 mb-3">
            <Skeleton width="100%" height={16} />
            <Skeleton width="60%" height={16} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ArticleCardSkeleton;
