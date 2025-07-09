import React from 'react'



const RestaurantKeyFeatures = ({ data }: any) => {

    return (
        <div>
            <h2 className="text-[#121212] font-semibold lg:mb-6 mb-5 font-large">
                What This Place Offer
            </h2>
            <div className="grid grid-cols-2 gap-6">
                {data.map((item: string, index: number) => {
                    // // Find the English label in the `libelle` array
                    // const englishLabel = item.libelle.find((label:any) => label.$.lang === "en");

                    // if (!englishLabel) {
                    //   return null; // Skip if no English label is found
                    // }

                    return (
                        <div key={index} className="flex gap-3 items-center">
                            {/* Render the English feature name */}
                            <span className="text-[#666D80] font-regular font-semibold">
                                {item}
                            </span>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default RestaurantKeyFeatures