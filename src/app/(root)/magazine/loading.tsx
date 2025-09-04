
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ArticleCardSkeleton from "@/components/skeletons/ArticleCardSkeleton";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#e5e5e5">
      <>
        {/* Hero Section Skeleton */}
        <section className="relative w-full h-[400px]">
          {/* Background skeleton */}
          <Skeleton className="w-full h-full rounded-none" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

          {/* Heading + Tagline skeletons */}
          <div className="flex items-center justify-center gap-3 flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 px-4">
            {/* Heading skeleton */}
            <Skeleton width="75%" height={56} className="rounded-md" />
            {/* Tagline skeleton */}
            <Skeleton width="60%" height={24} className="rounded-md" />
          </div>

          {/* Search Bar skeleton */}
          <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] lg:w-[50%]">
            <Skeleton height={48} className="rounded-md" />
          </div>
        </section>

        {/* Categories + Articles Section */}
        <section className="sm:mt-[80px] mt-[70px] mb-16 md:mb-12 mb-10">
          <div className="container">
            {/* Categories Filter Skeleton */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                  key={i}
                  width={96}
                  height={40}
                  className="rounded-md"
                />
              ))}
            </div>

            {/* Grid Article Skeletons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-3 gap-y-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ArticleCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
      </>
    </SkeletonTheme>
  );
}
