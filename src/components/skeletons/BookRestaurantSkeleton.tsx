
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookRestaurantSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
            <section className=" container">

                <div className="md:mt-[140px] mt-[80px]"></div>
                {/* Header (title + location) */}
                <div className="sm:flex hidden flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <Skeleton width={280} height={32} />
                        <Skeleton width={180} height={18} />
                    </div>
                    <Skeleton circle width={40} height={40} /> {/* Share button */}
                </div>

                {/* Image gallery - responsive */}
                <div className="flex gap-3 mb-10 md:h-[439px] h-[320px]">
                    {/* Big main image */}
                    {/* Big main image */}
                    <div className="flex-1">
                        <Skeleton width="100%" height="100%" className="rounded-[12px]" />
                    </div>

                    {/* Grid of 4 images (hidden on small screens) */}
                    <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-3 flex-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Skeleton key={i} className="rounded-[12px] w-full h-full" />
                        ))}
                    </div>
                </div>

                <div className="sm:hidden flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <Skeleton width={280} height={32} />
                        <Skeleton width={180} height={18} />
                    </div>
                </div>

                {/* Submenu */}
                <div className="flex gap-4 mb-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} width={100} height={28} />
                    ))}
                </div>

                <div className="flex gap-10 md:justify-between md:flex-row flex-col">
                    {/* Left Column (Details, Features, etc.) */}
                    <div className="w-full md:max-w-[888px] pl-3">
                        {/* About the Chalet */}
                        <div className="mb-10">
                            <Skeleton width={200} height={28} className="mb-3" />
                            <Skeleton height={18} className="mb-2" />
                            <Skeleton height={18} className="mb-2" />
                            <Skeleton height={18} className="mb-2" />
                            <Skeleton height={18} width={"80%"} />
                        </div>

                        {/* Key Features */}
                        <div className="mb-10">
                            <Skeleton width={160} height={26} className="mb-4" />
                            <div className="grid grid-cols-2 gap-4">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Skeleton circle width={20} height={20} />
                                        <Skeleton width={100} height={14} />
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>

                    {/* Right Column (Form on large screens) */}
                    <div className="md:max-w-[487px] sm:block hidden w-full">
                        <div
                            className="border border-[#e3e3e3] bg-white rounded-[12px] p-2 md:sticky md:top-[10px]"
                            style={{ boxShadow: "0px 4px 12px 0px #9A9A9A1A" }}
                        >
                            {/* Title skeleton */}
                            <Skeleton width={200} height={26} className="mb-4" />

                           

                            {/* Row 2: one input */}
                            <Skeleton height={42} width="100%" className="mb-4 rounded-[8px]" />

<Skeleton height={42} width="100%" className="mb-4 rounded-[8px]" />

<Skeleton height={42} width="100%" className="mb-4 rounded-[8px]" />

                            {/* Row 3: two inputs */}
                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <Skeleton height={42} className="rounded-[8px] w-full" />
                                </div>
                                <div className="flex-1">
                                    <Skeleton height={42} className="rounded-[8px] w-full" />
                                </div>
                            </div>

                            {/* Row 4: two inputs */}
                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <Skeleton height={42} className="rounded-[8px] w-full" />
                                </div>
                                <div className="flex-1">
                                    <Skeleton height={42} className="rounded-[8px] w-full" />
                                </div>
                            </div>

                        
                            {/* Row 6: message box */}
                            <Skeleton height={80} width="100%" className="mb-4 rounded-[8px]" />

                            {/* Submit button */}
                            <Skeleton height={42} width="100%" className="rounded-[12px]" />
                        </div>
                    </div>




                </div>

                {/* Map */}
                <div className="my-12">
                    <Skeleton width={160} height={26} className="mb-4" />
                    <Skeleton height={300} className="rounded-[12px]" />
                </div>
            </section>
        </SkeletonTheme>
    );
};

export default BookRestaurantSkeleton;
