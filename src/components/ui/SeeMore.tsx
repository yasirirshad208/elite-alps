'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SeeMore = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = () => {
        
        const currentPage = Number(searchParams.get('page')) || 1;
        const nextPage = currentPage + 1;

        const params = new URLSearchParams(searchParams.toString());
        params.set('page', nextPage.toString());

        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className='flex justify-center w-full mt-[40px]'>
            <button
                onClick={handleClick}
                className='px-[24px] py-[12px] rounded-[9999px] border-2 border-[#e3e3e3] cursor-pointer font-[600] font-medium sm:w-auto w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
            >
                
                    <>
                        See More
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
                            <path d="M20.531 10.0307L13.031 17.5307C12.9614 17.6004 12.8787 17.6557 12.7876 17.6935C12.6966 17.7312 12.599 17.7506 12.5004 17.7506C12.4019 17.7506 12.3043 17.7312 12.2132 17.6935C12.1222 17.6557 12.0394 17.6004 11.9698 17.5307L4.46979 10.0307C4.32906 9.88995 4.25 9.69907 4.25 9.50005C4.25 9.30103 4.32906 9.11016 4.46979 8.96943C4.61052 8.82869 4.80139 8.74963 5.00042 8.74963C5.19944 8.74963 5.39031 8.82869 5.53104 8.96943L12.5004 15.9397L19.4698 8.96943C19.5395 8.89974 19.6222 8.84447 19.7132 8.80676C19.8043 8.76904 19.9019 8.74963 20.0004 8.74963C20.099 8.74963 20.1965 8.76904 20.2876 8.80676C20.3786 8.84447 20.4614 8.89974 20.531 8.96943C20.6007 9.03911 20.656 9.12183 20.6937 9.21288C20.7314 9.30392 20.7508 9.4015 20.7508 9.50005C20.7508 9.5986 20.7314 9.69618 20.6937 9.78722C20.656 9.87827 20.6007 9.96099 20.531 10.0307Z" fill="black" />
                        </svg>
                    </>
            </button>
        </div>
    );
};

export default SeeMore;