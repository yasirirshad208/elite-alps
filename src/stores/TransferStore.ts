import { create } from 'zustand';
import axios from 'axios';

export interface Jet {
  [key: string]: any;
}

export interface Helicopter {
  [key: string]: any;
}

export interface Car {
  [key: string]: any;
}

interface TransportState {
  jets: Jet[];
  helicopters: Helicopter[];
  cars: Car[];
  loading: boolean;
  error: string | null;

  fetchJets: (params: {
    departure: string;
    destination: string;
    passengers: string;
    page: string;
  }) => Promise<void>;

  fetchHelicopters: (params: {
    departure: string;
    destination: string;
    passengers: string;
    page: string;
  }) => Promise<void>;

  fetchCars: (params: {
    departure: string;
    destination: string;
    passengers: string;
    page: string;
  }) => Promise<void>;
}

export const useTransferStore = create<TransportState>((set, get) => ({
  jets: [],
  helicopters: [],
  cars: [],
  loading: false,
  error: null,

  fetchJets: async ({ departure, destination, passengers, page }) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'http://localhost:5000/api/jet/all',
        {
          params: { departure, destination, passengers, page },
        }
      );
      const newData = response.data.jets || [];
      
      const currentData = get().jets;

      set({
        jets: page === '1' ? newData : [...currentData, ...newData],
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch jets' });
    } finally {
      set({ loading: false });
    }
  },

  fetchHelicopters: async ({ departure, destination, passengers, page }) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'http://localhost:5000/api/helicopter/all',
        {
          params: { departure, destination, passengers, page },
        }
      );
      const newData = response.data?.helicopters || [];
      console.log(newData)
      const currentData = get().helicopters;

      set({
        helicopters: page === '1' ? newData : [...currentData, ...newData],
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch helicopters' });
    } finally {
      set({ loading: false });
    }
  },

  fetchCars: async ({ departure, destination, passengers, page }) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams({
        departure,
        destination,
        passengers,
        page,
      }).toString();

      const response = await fetch(
        `http://localhost:5000/api/car/all?${params}`
      );
      const result = await response.json();
      const newData = result?.cars || [];
      const currentData = get().cars;

      set({
        cars: page === '1' ? newData : [...currentData, ...newData],
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch cars' });
    } finally {
      set({ loading: false });
    }
  },
}));
