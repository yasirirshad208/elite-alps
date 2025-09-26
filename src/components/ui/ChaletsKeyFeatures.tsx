import React from 'react'

  interface ChaletsKeyFeaturesProps {
    data: String[]; // Define the props for the component
  }
  
  const ChaletsKeyFeatures: React.FC<ChaletsKeyFeaturesProps> = ({ data }) => {
   
    return (
    <div>
        <h2 className="text-[#121212] font-semibold lg:mb-6 mb-5 font-large">
                  Key Features
                </h2>
                <div className="grid grid-cols-2 gap-6">
                {data.map((item:any, index:any) => {

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

export default ChaletsKeyFeatures