import React from 'react'
import AccommodationHeroFilter from './AccommodationHeroFilter'

type AccommodationHeaderProps = {
    image:string,
    text:string
    page:string
    location?:string
    minPrice?:string
    maxPrice?:string
    guest?:string
    checkin?:string
    checkout?:string
}

const AccommodationHeader = ({image, text, page, location, minPrice, maxPrice, guest, checkin, checkout}:AccommodationHeaderProps) => {
    return (
        <section >
            <div
                className="sm:px-0 px-4 relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* Content */}
                <div className="flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
                    <div className="lg:mt-0 sm:mt-[-150px] mt-[-150px] text-[20px] sm:text-[28px] lg:text-[48px] xl:text-[56px] font-[600] !text-white text-center leading-[120%] max-w-[750px]">
                        {text}
                    </div>
                </div>

            <AccommodationHeroFilter page={page} locationVal={location} guestsVal={Number(guest)} minPriceVal={Number(minPrice)} maxPriceVal={Number(maxPrice)} checkInVal={checkin ? new Date(checkin) : undefined} checkOutVal={checkout ? new Date(checkout) : undefined} />

                
            </div>
        </section>
    )
}

export default AccommodationHeader