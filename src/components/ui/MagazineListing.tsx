"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import ArticleCard from './ArticleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useExperienceStore } from '@/stores/ExperienceStore';
import ArticleCardSkeleton from '../skeletons/ArticleCardSkeleton';

const MagazineListing = ({ bgColor = true, heading, headline }: { bgColor?: boolean, headline?: string, heading?: string }) => {
    const { magazines, fetchMagazines } = useExperienceStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            if (magazines.length === 0) {
                setLoading(true);
                await fetchMagazines();
                setLoading(false);
            } else {
                setLoading(false);
            }
        };
        loadData();
    }, [fetchMagazines, magazines.length]);

    return (
        <section>
            <div className={`${bgColor ? "bg-[#EFEFEF]" : "bg-white"} lg:py-16 md:py-12 py-10`}>
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="px-[16px] sm:px-0 flex md:justify-between w-full md:items-end flex-col md:flex-row gap-6.5">
                        <div>
                            <div className="text-[#666D80] font-medium">//Our Articles</div>
                            <div className="heading-h1 text-[#121212] leading-[120%] my-2">{heading ? heading : "The Magazine"}</div>
                            <div className="text-[#666D80] font-medium">
                                {headline ? headline : "Alpine inspiration and insider perspectives."}
                            </div>
                        </div>

                        <div className='sm:w-auto w-full'>
                            <Link href="/magazine" >
                                <button className='sm:w-auto w-full cursor-pointer md:py-3 md:px-6 py-2 px-4 font-medium text-[#121212] rounded-[9999px] bg-white border border-[#e3e3e3]'>
                                    View All Articles
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    <div className='md:mt-12 mt-8 relative sm:pl-0 pl-[16px]'>
                        {loading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <ArticleCardSkeleton key={i} />
                                ))}
                            </div>
                        ) : (
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={12}
                                slidesPerView={1.16}
                                loop={true}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                navigation={{
                                    prevEl: '.magazine-prev',
                                    nextEl: '.magazine-next',
                                }}
                            >
                                {magazines.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <ArticleCard
                                            description={item.blogDetails}
                                            image={`https://elite-experience-backend.onrender.com/${item.image}`}
                                            category={item.category}
                                            title={item.title}
                                            slug={item.slug}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        {/* Custom Navigation */}
                        {!loading && (
                            <div className="flex items-center gap-3 justify-start sm:justify-center mt-8">
                                <button
                                    className="magazine-prev hover:text-white hover:bg-black transition-all duration-300 text-black bg-white rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer"
                                >
                                    <FaArrowLeftLong />
                                </button>
                                <button
                                    className="magazine-next text-white bg-black rounded-full md:h-[57px] h-[46px] md:w-[57px] w-[46px] flex items-center justify-center md:text-[22px] text-[20px] cursor-pointer"
                                >
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MagazineListing;
