import React from 'react'
import TransferHeroFilter from './TransferHeroFilter'

type AccommodationHeaderProps = {
    image:string,
    text:string,
    page:string
}

const TransferHero = ({page, image, text}:AccommodationHeaderProps) => {
    return (
        <section >
            <div
                className="container-padding relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* Content */}
                <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                    <div className="sm:mt-0 mt-[-150px] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[750px]">
                        {text}
                    </div>
                </div>

                <TransferHeroFilter page={page} />
            </div>
        </section>
    )
}

export default TransferHero