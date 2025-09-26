import { create } from 'zustand';
import axios from 'axios';


export interface Accommodation {
  id_bien: string;
  nb_adultes: string;
  surface: string;
  nom_bien_en:Array<string>
  nom_station:Array<string>
  nom_station_en:Array<string>
  nombre_chambres:string
  prix_appel_hiver:Array<string>
  photo_web:Array<string>
}

interface AccommodationState {
  accommodations: Accommodation[];
  chalets: Accommodation[],
  randomChalets: Accommodation[],
  randomApartments: Accommodation[],
  apartments: Accommodation[],
  loading: boolean;
  error: string | null;
  fetchAccommodations: () => Promise<void>;
  accommodationFilters: () => Promise<void>;
}

export const useAccommodationStore = create<AccommodationState>((set) => ({
  accommodations: [],
  chalets: [],
  randomChalets:[],
  apartments: [],
  randomApartments:[],
  loading: false,
  error: null,

  fetchAccommodations: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        'https://elite-experience-backend.onrender.com/api/accommodations/properties/get'
      );

      const accommodationsData =
        response.data?.data?.message?.biens?.[0]?.bien || [];

        const allowedLocations = ["courchevel", "meribel", "val thorens"];

    const filteredChalets = accommodationsData.filter((i: any) => 
      i.type_bien?.[0] === "chalet" &&
      allowedLocations.some(loc => i.nom_station_en?.[0]?.toLowerCase().includes(loc.toLowerCase()))
      
    );//appartement

    const filteredApartments = accommodationsData.filter((i: any) => 
      i.type_bien?.[0] === "appartement" &&
      allowedLocations.some(loc => i.nom_station_en?.[0]?.toLowerCase().includes(loc.toLowerCase()))
      
    );

    const sliderChalets = filteredChalets.sort(() => 0.5 - Math.random()).slice(0, 12);

    const sliderApartments = filteredApartments.sort(() => 0.5 - Math.random()).slice(0, 12);

      set({ chalets: filteredChalets,
        apartments: filteredApartments,
        randomApartments: sliderApartments,
        randomChalets:sliderChalets
       }); 
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch accommodations' });
    } finally {
      set({ loading: false });
    }
  },
  accommodationFilters: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        'https://elite-experience-backend.onrender.com/api/accommodations/properties/get'
      );

      const accommodationsData =
        response.data?.data?.message?.biens?.[0]?.bien || [];

        const allowedLocations = ["courchevel", "meribel", "val thorens"];

    const filteredChalets = accommodationsData.filter((i: any) => 
      i.type_bien?.[0] === "chalet" &&
      allowedLocations.some(loc => i.nom_station_en?.[0]?.toLowerCase().includes(loc.toLowerCase()))
      
    );//appartement

    const filteredApartments = accommodationsData.filter((i: any) => 
      i.type_bien?.[0] === "appartement" &&
      allowedLocations.some(loc => i.nom_station_en?.[0]?.toLowerCase().includes(loc.toLowerCase()))
      
    );


      set({ chalets: filteredChalets,
        apartments: filteredApartments,
       }); 
       
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch accommodations' });
    } finally {
      set({ loading: false });
    }
  }
}));
