import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookVehicleSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            <section className="pt-[90px] md:pt-[100px] lg:pt-[120px] bg-[#EFEFEF]">
                {/* Breadcrumb skeleton */}
                <div className="container flex items-center gap-2">
                    <Skeleton width={100} height={18} />
                    <Skeleton width={14} height={14} circle />
                    <Skeleton width={120} height={18} />
                </div>

                {/* Heading */}
                <div className="flex container mx-auto md:pt-6 pt-4">
                    <div className="flex-1">
                        <Skeleton width={260} height={36} className="mb-2" />
                        <Skeleton width={400} height={20} />
                    </div>
                    <div className="lg:flex-1"></div>
                </div>

                {/* Main content - 2 column layout */}
                <div className="lg:pt-[48px] md:pt-[36px] pt-[20px] flex flex-col-reverse lg:flex-row container mx-auto xl:gap-10 lg:gap-8 gap-6">
                    {/* LEFT: Form skeleton */}
                    <div className="flex-1 w-full flex flex-col">
                        <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 flex-1 space-y-4">
                            {/* Inputs */}
                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                            </div>
                            <div className="flex gap-3 mb-4">
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                                <div className="flex-1">
                                    <Skeleton height={50} className="rounded-[8px] w-full" />
                                </div>
                            </div>
                            {/* Textarea */}
                            <Skeleton height={100} className="rounded-[12px] w-full" />
                            {/* Checkbox */}
                            <Skeleton height={20} width={220} />
                            {/* Button */}
                            <Skeleton height={48} className="rounded-[12px] w-full" />
                        </div>
                    </div>

                    {/* RIGHT: Vehicle card skeleton */}
                    <div className="flex-1 font-inter w-full flex flex-col">
                        <div className="border border-[#e3e3e3] bg-white rounded-[12px] p-4 flex-1">
                            {/* Vehicle image gallery */}
                            <div className="flex gap-3 mb-6 md:h-[250px] h-[200px]">
                                <Skeleton height="100%" className="flex-1 rounded-[12px]" />
                                <div className="block flex-1">
                                        <Skeleton  className="rounded-[12px] w-full h-full" />
                              
                                </div>
                            </div>

                            {/* Vehicle title */}
                            <Skeleton width={220} height={28} className="mb-4" />

                            {/* Info tags (seats, passengers, speed, etc.) */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Skeleton
                                        key={i}
                                        width={100 + (i % 2 === 0 ? 40 : 0)}
                                        height={32}
                                        className="rounded-[12px]"
                                    />
                                ))}
                            </div>

                            {/* Divider */}
                            <Skeleton height={1} className="w-full mb-4" />

                            {/* Jet Details Heading */}
                            <Skeleton width={140} height={20} className="mb-2" />

                            {/* Jet Details Paragraph */}
                            <div className="flex flex-col gap-2">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <Skeleton key={i} height={20} className="w-3/4" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Magazine section skeleton */}
                {/* <div className="lg:mt-16 md:my-12 mt-10 container">
                    <Skeleton height={200} className="rounded-[12px] w-full" />
                </div> */}
            </section>
        </SkeletonTheme>
    );
};

export default BookVehicleSkeleton;
