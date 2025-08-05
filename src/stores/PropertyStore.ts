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
  countApartments:number;
  apartments: apartments[];
  loading: boolean;
  error: string | null;

  fetchChalets: (filters?: {
  page?: string;
}) => Promise<void>;

  fetchApartments: (filters?: {
  page?: string;
}) => Promise<void>;
}

export const usePropertyStore = create<PropertyState>((set) => ({
  chalets: [],
  apartments: [],
  countChalets:0,
  countApartments:0,
  loading: false,
  error: null,

 fetchChalets: async (filters = {}) => {
  set({ loading: true, error: null });

  try {
    const params = new URLSearchParams(filters as Record<string, string>);
    params.set("type", "chalet");

    const response = await axios.get(
      `https://elite-experience-backend.onrender.com/api/accommodations/properties/get/all?${params.toString()}`
    );

    const newData = response.data.properties || [];
    const total = parseInt(response.data.countTotalProperties);

    // Get page number
    const page = parseInt(params.get("page") || "1");

    set((state) => ({
      chalets: page > 1 ? [...state.chalets, ...newData] : newData,
      countChalets: total,
    }));
  } catch (error: any) {
    set({ error: error.message || "Failed to fetch chalets" });
  } finally {
    set({ loading: false });
  }
},


 fetchApartments: async (filters = {}) => {
  set({ loading: true, error: null });

  try {
    const params = new URLSearchParams(filters as Record<string, string>);
    params.set("type", "appartement");

    const response = await axios.get(
      `https://elite-experience-backend.onrender.com/api/accommodations/properties/get/all?${params.toString()}`
    );

    const newData = response.data.properties || [];
    const total = parseInt(response.data.countTotalProperties);

    // Get page number
    const page = parseInt(params.get("page") || "1");

    set((state) => ({
      apartments: page > 1 ? [...state.apartments, ...newData] : newData,
      countApartments: total,
    }));
  } catch (error: any) {
    set({ error: error.message || "Failed to fetch chalets" });
  } finally {
    set({ loading: false });
  }
  },

}));
