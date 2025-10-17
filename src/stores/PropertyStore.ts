import { create } from 'zustand';
import axios from 'axios';

export interface chalets {
  [key: string]: any;
}

export interface apartments {
  [key: string]: any;
}


interface PropertyState {
  chalets: chalets[];
  countChalets:number;
  sliderChalets: chalets[];
  sliderApartments: apartments[];
  countApartments:number;
  apartments: apartments[];
  loading: boolean;
  error: string | null;

  fetchChalets: (filters?: {
   location?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  guest?: string;
  feature?: string;
  checkin?: string;
  checkout?: string;
  page?: string;
}) => Promise<void>;

fetchSliderChalets: (price?: string) => Promise<void>;

fetchSliderApartments: (price?: string) => Promise<void>;

  fetchApartments: (filters?: {
   location?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
  guest?: string;
  feature?: string;
  checkin?: string;
  checkout?: string;
  page?: string;
}) => Promise<void>;
}

export const usePropertyStore = create<PropertyState>((set) => ({
  chalets: [],
  sliderChalets:[],
  apartments: [],
  sliderApartments:[],
  countChalets:0,
  countApartments:0,
  loading: false,
  error: null,

fetchChalets: async (filters = {}) => {
  set({ loading: true, error: null });

  try {
    const params = new URLSearchParams();
    const page = filters.page || "1";
    params.set("type", "chalet");
    params.set("page", page);

    // Add all filters to query
    const filterKeys = ["location", "minPrice", "sort", "maxPrice", "guest", "feature", "checkin", "checkout"] as const;
    for (const key of filterKeys) {
      const value = filters[key as keyof typeof filters];
      if (value) {
        params.set(key, value);
      }
    }

    const response = await axios.get(
      `https://elite-experience-backend.onrender.com/api/accommodations/properties/get/all?${params.toString()}`
    );

    const newData = response.data.properties || [];
    const total = parseInt(response.data.countTotalProperties);
    const pageNum = parseInt(page);

    set((state) => ({
      chalets: pageNum > 1 ? [...state.chalets, ...newData] : newData,
      countChalets: total,
    }));
  } catch (error: any) {
    set({ error: error.message || "Failed to fetch chalets" });
  } finally {
    set({ loading: false });
  }
}
,

fetchSliderChalets: async (price?: string) => {
  set({ loading: true, error: null });

  try {
    const params = new URLSearchParams();

    params.set("type", "chalet");

    if(price){
      params.set("price", price);
    }

    const response = await axios.get(
      `https://elite-experience-backend.onrender.com/api/accommodations/properties/get/recommended?${params.toString()}`
    );

    const newData = response.data.properties || [];

    set({
      sliderChalets:newData,
    });
  } catch (error: any) {
    set({ error: error.message || "Failed to fetch chalets" });
  } finally {
    set({ loading: false });
  }
},




 fetchApartments: async (filters = {}) => {
  set({ loading: true, error: null });

  try {
    const params = new URLSearchParams();
    const defaultType = "appartement";
    const page = filters.page || "1";
    params.set("type", defaultType);
    params.set("page", page);

    let hasExtraFilters = false;

    const filterKeys = ["location", "minPrice", "sort", "maxPrice", "guest", "feature", "checkin", "checkout"] as const;

    for (const key of filterKeys) {
      const value = filters[key as keyof typeof filters];
      if (value) {
        hasExtraFilters = true;
        params.set(key, value);
      }
    }

    const response = await axios.get(
      `https://elite-experience-backend.onrender.com/api/accommodations/properties/get/all?${params.toString()}`
    );

    const newData = response.data.properties || [];
    const total = parseInt(response.data.countTotalProperties);

    const pageNum = parseInt(page);

    console.log(newData);

    set((state) => ({
      apartments: pageNum > 1 ? [...state.apartments, ...newData] : newData,
      countApartments: total,
    }));
  } catch (error: any) {
    set({ error: error.message || "Failed to fetch apartments" });
  } finally {
    set({ loading: false });
  }
},


fetchSliderApartments: async (price?: string) => {
  set({ loading: true, error: null });

  try {
    const params = new URLSearchParams();

    params.set("type", "appartement");
    if(price){
      params.set("price", price);
    }

    const response = await axios.get(
      `https://elite-experience-backend.onrender.com/api/accommodations/properties/get/recommended?${params.toString()}`
    );

    const newData = response.data.properties || [];

    set({
      sliderApartments:newData,
    });
  } catch (error: any) {
    set({ error: error.message || "Failed to fetch chalets" });
  } finally {
    set({ loading: false });
  }
},


}));
