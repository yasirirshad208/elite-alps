

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VehicleCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
      <div className="flex gap-5 flex-col xl:flex-row lg-gap-8">
        {/* Left column (image & details) */}
        <div
          className="h-auto xl:w-[40%] w-full rounded-[12px] p-1.5 border border-[#e3e3e3] flex flex-col"
          style={{ boxShadow: "0px 4px 12px 0px #9A9A9A1A" }}
        >
          {/* Image Skeleton */}
          <Skeleton height={250} className="rounded-[12px] w-full mb-3" />

          {/* Title */}
          <Skeleton width={180} height={20} className="mb-2" />

          {/* Grid (icons + text placeholders) */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} height={18} className="w-3/4" />
            ))}
          </div>
        </div>

        {/* Right column (transfer rates) */}
        <div className="h-auto xl:w-[60%] w-full flex flex-col">
          {/* Heading */}
          <Skeleton width={220} height={26} className="mb-4" />

          {/* Rate cards */}
          <div className="flex flex-col gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between bg-white border border-[#e3e3e3] rounded-[12px] p-3 md:pl-6 md:py-6 md:pr-4"
                style={{ boxShadow: "0px 4px 12px 0px #9A9A9A1A" }}
              >
                <div className="flex flex-col gap-3">
                  <Skeleton width={140} height={20} />
                  <Skeleton width={100} height={20} />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={120} height={40} className="rounded-[12px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default VehicleCardSkeleton;
