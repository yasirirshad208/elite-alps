import React, { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'

// Single review item (only 4★+ filtered)
export type SingleReview = {
    name: string;
    image?: string;
    time: string; // e.g. "2 weeks ago"
    rating: number; // 1–5
    review: string;
};

// Rating breakdown type
export type RatingBreakdown = {
    fiveStar: number; // percentage or count
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
};

// Combined ReviewProps type
export type ReviewProps = {
    avgRating: number; // e.g. 4.6
    totalReviews: number; // e.g. 1273
    ratingBreakdown: RatingBreakdown;
    reviews: SingleReview[]; // filtered reviews (≥4★)
};


const Reviews = ({ avgRating, totalReviews, ratingBreakdown, reviews }: ReviewProps) => {
    const [expandedReviews, setExpandedReviews] = useState(new Set<number>());

    const formatTotalReviews = (num: number) => {
        if (num < 1000) return num;
        return (num / 1000).toFixed(1) + 'k';
    };

    const toggleExpand = (index: number) => {
        setExpandedReviews(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    // Calculate stars
    const maxStars = 5;
    const filledStars = Math.floor(avgRating); // integer part
    const hasHalfStar = avgRating - filledStars >= 0.5;
    const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);
    return (
        <div className='flex flex-col gap-[16px]'>
            <div>
                <h5 className='text-[20px] font-semibold text-[#121212] leading-[120%]'>Restaurant Testimonials</h5>
                <div className='w-full flex md:items-center md:flex-row flex-col gap-3 mt-4'>
                    <div className='p-3 rounded-[12px] md:w-[350px] w-full flex-col flex items-center justify-center border border-[#e3e3e3] gap-3'>
                        <h1 className='text-[48px] md:text-[56px] leading-[120%] text-[#121212] font-[600]'>{avgRating.toFixed(1)}</h1>
                        <div className='flex items-center gap-1'>
                            {Array(filledStars).fill(0).map((_, i) => (
                                <FaStar key={`filled-${i}`} className="w-[16px] h-[16px] text-[#FFA515]" />
                            ))}
                            {/* Half star */}
                            {hasHalfStar && (
                                <FaStar key="half" className="w-[16px] h-[16px] text-[#FFA515]" />
                            )}
                            {/* Empty stars */}
                            {Array(emptyStars).fill(0).map((_, i) => (
                                <FaRegStar key={`empty-${i}`} className="w-[16px] h-[16px] text-[#FFA515]" />
                            ))}
                        </div>

                        <p className='text-[#666D80] text-[16px] text-center'>{formatTotalReviews(totalReviews)} reviews</p>
                    </div>

                    <div className='flex flex-col gap-2 p-3 rounded-[12px] border border-[#e3e3e3] w-full'>
                        <div className='flex items-center gap-3'>
                            <div className='w-full bg-[#efefef] h-[10px] rounded-[12px]'>
                                <div
                                    className='bg-[#0074ec] h-[10px] rounded-[12px]'
                                    style={{ width: `${ratingBreakdown.fiveStar}%` }}
                                ></div>
                            </div>


                            <div className='w-[183px] gap-1 flex justify-end items-center'>
                                <div className='flex items-center justify-end gap-1'>
                                    {[1, 2, 3, 4, 5].map((_, i) => <FaStar key={i} className="w-[12px] h-[12px] text-[#FFA515]" />)}
                                </div>
                                <span className='text-[#121212] w-[35px]  text-end text-[14px] font-[500]'>{ratingBreakdown.fiveStar}%</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-full bg-[#efefef] h-[10px] rounded-[12px]'>
                                <div
                                    className='bg-[#0074ec] h-[10px] rounded-[12px]'
                                    style={{ width: `${ratingBreakdown.fourStar}%` }}
                                ></div>
                            </div>


                            <div className='w-[183px] gap-1 flex justify-end items-center'>
                                <div className='flex items-center justify-end gap-1'>
                                    {[1, 2, 3, 4].map((_, i) => <FaStar key={i} className="w-[12px] h-[12px] text-[#FFA515]" />)}
                                </div>
                                <span className='text-[#121212] w-[35px]  text-end text-[14px] font-[500]'>{ratingBreakdown.fourStar}%</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-full bg-[#efefef] h-[10px] rounded-[12px]'>
                                <div
                                    className='bg-[#0074ec] h-[10px] rounded-[12px]'
                                    style={{ width: `${ratingBreakdown.threeStar}%` }}
                                ></div>
                            </div>


                            <div className='w-[183px] gap-1 flex justify-end items-center'>
                                <div className='flex items-center justify-end gap-1'>
                                    {[1, 2, 3,].map((_, i) => <FaStar key={i} className="w-[12px] h-[12px] text-[#FFA515]" />)}
                                </div>
                                <span className='text-[#121212] w-[35px]  text-end text-[14px] font-[500]'>{ratingBreakdown.threeStar}%</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-full bg-[#efefef] h-[10px] rounded-[12px]'>
                                <div
                                    className='bg-[#0074ec] h-[10px] rounded-[12px]'
                                    style={{ width: `${ratingBreakdown.twoStar}%` }}
                                ></div>
                            </div>


                            <div className='w-[183px] gap-1 justify-end flex items-center'>
                                <div className='flex items-center justify-end gap-1'>
                                    {[1, 2,].map((_, i) => <FaStar key={i} className="w-[12px] h-[12px] text-[#FFA515]" />)}
                                </div>
                                <span className='text-[#121212] w-[35px]  text-end text-[14px] font-[500]'>{ratingBreakdown.twoStar}%</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='w-full bg-[#efefef] h-[10px] rounded-[12px]'>
                                <div
                                    className='bg-[#0074ec] h-[10px] rounded-[12px]'
                                    style={{ width: `${ratingBreakdown.oneStar}%` }}
                                ></div>
                            </div>


                            <div className='w-[183px] gap-1 justify-end flex items-center'>
                                <div className='flex items-center justify-end gap-1'>
                                    {[1].map((_, i) => <FaStar key={i} className="w-[12px] h-[12px] text-[#FFA515]" />)}
                                </div>
                                <span className='text-[#121212] w-[35px]  text-end text-[14px] font-[500]'>{ratingBreakdown.oneStar}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h5 className='text-[20px] font-semibold text-[#121212] leading-[120%]'>Reviews</h5>

                <div className='mt-[16px]'>
                    {reviews.map((review, index) => {
                        const isExpanded = expandedReviews.has(index);
                        const maxLength = 150; // Approximate for ~2 lines
                        const isLong = review.review.length > maxLength;
                        const displayText = isExpanded || !isLong ? review.review : review.review.substring(0, maxLength) + '...';

                        return (
                            <div key={index} className='p-4 sm:gap-[30px] gap-[20px] sm:flex-row flex-col flex border-b  border-[#e3e3e3] mb-4'>
                                <div className="w-[60px] h-[60px] flex-shrink-0">
                                    <img
                                        src={
                                            review.image ? `${review.image}`
                                                : `https://cdn-icons-png.flaticon.com/512/149/149071.png`
                                        }
                                        alt={review.name}
                                        className="w-full h-full rounded-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://cdn-icons-png.flaticon.com/512/149/149071.png`;
                                        }}
                                    />

                                </div>

                                <div className='mb-2.5'>
                                    <div className='mb-2.5 flex items-center gap-3'>
                                        <h6 className='text-[16px] leading-[120%] font-semibold text-[#121212]'>{review.name}</h6>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className="w-[16px] h-[16px] text-[#FFA515]" />
                                            <span className='text-[16px] text-[#121212]'>{review.rating}.0</span>
                                        </div>
                                        <p className='text-[14px] text-[#666D80]'>{review.time}</p>
                                    </div>
                                    <p className='text-[14px] text-[#666D80] leading-[140%]'>
                                        {displayText}
                                        {!isExpanded && isLong && (
                                            <span className='text-blue-500 cursor-pointer' onClick={() => toggleExpand(index)}> read more</span>
                                        )}
                                        {isExpanded && isLong && (
                                            <span className='text-blue-500 cursor-pointer' onClick={() => toggleExpand(index)}> read less</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reviews
