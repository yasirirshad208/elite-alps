"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import CountUp from "react-countup";
const AboutAchievements = () => {

    const [startCount, setStartCount] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStartCount(true);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <section className="mt-[40px] md:mt-[60px] lg:mt-[80px] ">
            <div className="bg-[#efefef] py-[40px] md:py-[60px] lg:my-[80px] w-full">
                <div
                    className="container p-3 rounded-[12px] bg-white mx-auto flex md:flex-row flex-col gap-[48px]"
                    ref={statsRef}
                >
                    <div className="md:max-w-[540px] w-full">
                        <Image
                            alt='About'
                            width={540}
                            height={560}
                            src="/about-3.webp"
                            className="w-full md:w-[540px] h-[392px] sm:h-[560px] object-cover rounded-[12px]"
                        />
                    </div>

                    <div className="w-full flex flex-col gap-[48px]">
                        <div className="flex flex-col gap-3">
                            <h1 className="heading-h1 text-[#121212] font-[600]">
                                We&apos;re only just getting started on our journey
                            </h1>

                            <div className='font-medium font-[400] text-[#666D80]'>Embarking on a Legacy of Extraordinary Destinations</div>

                        </div>


                        <div className="flex h-[272px] flex-col justify-between items-center shrink-0 self-stretch">

                            <div className='flex items-start gap-[32px] self-stretch'>
                                <div className='w-full'>
                                    <h1 className="heading-h1 !text-[#0074ec] font-[600]">
                                        {startCount ? (
                                            <CountUp start={0} end={400} duration={1} />
                                        ) : (
                                            0
                                        )}
                                        +
                                    </h1>
                                    <div className="text-[#666D80] font-medium mt-[12px]">
                                        Projects completed
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <h1 className="heading-h1 !text-[#0074ec] font-[600]">
                                        {startCount ? (
                                            <CountUp start={0} end={600} duration={1} />
                                        ) : (
                                            0
                                        )}
                                        %
                                    </h1>
                                    <div className="text-[#666D80] font-medium mt-[12px]">
                                        Return on investment
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-[32px] self-stretch'>
                                <div className='w-full'>
                                    <h1 className="heading-h1 !text-[#0074ec] font-[600]">
                                        {startCount ? (
                                            <CountUp start={0} end={10} duration={1} />
                                        ) : (
                                            0
                                        )}
                                        k
                                    </h1>
                                    <div className="text-[#666D80] font-medium mt-[12px]">
                                        Global Downloads
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className="heading-h1 !text-[#0074ec] font-[600]">
                                        {startCount ? (
                                            <CountUp start={0} end={200} duration={1} />
                                        ) : (
                                            0
                                        )}
                                        +
                                    </h1>
                                    <div className="text-[#666D80] font-medium mt-[12px]">
                                        5 star reviews
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-[48px]">
                    <div className=" text-center text-[#475467] font-large">
                        Lorem ipsum dolor sit amet <br /> consectetur adipisicing.
                    </div>
                    <div className="p-[32px] flex sm:flex-row flex-col lg:justify-between justify-center items-center flex-wrap gap-[24px]">
                        <img
                            src="/layers.png"
                            className="sm:w-[187px] sm:h-[48px] w-[121px] w-[40px]"
                            alt="company"
                        />
                        <img
                            src="/sisyphus.png"
                            className="sm:w-[187px] sm:h-[48px] w-[121px] w-[40px]"
                            alt="company"
                        />
                        <img
                            src="/cicooles.png"
                            className="sm:w-[187px] sm:h-[48px] w-[121px] w-[40px]"
                            alt="company"
                        />
                        <img
                            src="/catalog.png"
                            className="sm:w-[187px] sm:h-[48px] w-[121px] w-[40px]"
                            alt="company"
                        />
                        <img
                            src="/quotient.png"
                            className="sm:w-[187px] sm:h-[48px] w-[121px] w-[40px]"
                            alt="company"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAchievements