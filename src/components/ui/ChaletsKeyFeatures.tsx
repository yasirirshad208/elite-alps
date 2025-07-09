import React from 'react'

interface Libelle {
    _: string; // The label text
    $: {
      lang: string; // The language code (e.g., "fr", "en")
    };
  }
  
  interface Item {
    $: {
      id: string; // Unique identifier for the item
    };
    libelle: Libelle[]; // Array of labels in different languages
  }
  
  interface Data {
    data: Item[]; // Array of items
  }
  
  interface ChaletsKeyFeaturesProps {
    data: Data; // Define the props for the component
  }
  
  const ChaletsKeyFeatures: React.FC<ChaletsKeyFeaturesProps> = ({ data }: any) => {
   
    return (
    <div>
        <h2 className="text-[#121212] font-semibold lg:mb-6 mb-5 font-large">
                  Key Features
                </h2>
                <div className="grid grid-cols-2 gap-6">
                {data.map((item:any, index:any) => {
        // Find the English label in the `libelle` array
        const englishLabel = item.libelle.find((label:any) => label.$.lang === "en");

        if (!englishLabel) {
          return null; // Skip if no English label is found
        }

        return (
          <div key={index} className="flex gap-3 items-center">
            {/* Render the English feature name */}
            <span className="text-[#666D80] font-regular font-semibold">
              {englishLabel._}
            </span>
          </div>
        );
      })}

                </div>
    </div>
  )
}

export default ChaletsKeyFeatures