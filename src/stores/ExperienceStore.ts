import { create } from 'zustand';
import axios from 'axios';
import { Restaurant } from '@/app/(root)/restaurants/page';
import { Activity } from '@/app/(root)/activities/page';
import { Event } from '@/app/(root)/events/page';


export interface Magazine {
  [key: string]: any;
}

interface TransportState {
  restaurants: Restaurant[];
  activities: Activity[];
  events: Event[];
  magazines:Magazine[]
  loading: boolean;
  error: string | null;

  fetchRestaurants: () => Promise<void>;

  fetchActivities: () => Promise<void>;

  fetchEvents: () => Promise<void>;

  fetchMagazines: () => Promise<void>;
}

export const useExperienceStore = create<TransportState>((set) => ({
  restaurants: [],
  activities: [],
  events: [],
  magazines:[],
  loading: false,
  error: null,

  fetchRestaurants: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'http://localhost:5000/api/restaurants/all',
        
      );
      const newData = response.data.restaurants || [];

      const sliderRestaurants = newData.sort(() => 0.5 - Math.random()).slice(0, 12);

      set({
        restaurants: sliderRestaurants,
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch restaurants' });
    } finally {
      set({ loading: false });
    }
  },

 fetchActivities: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'http://localhost:5000/api/activity/all?isPublic=true',
        
      );
      const newData = response.data.activities || [];

      const sliderActivities = newData.sort(() => 0.5 - Math.random()).slice(0, 12);

      set({
        activities: sliderActivities,
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch activities' });
    } finally {
      set({ loading: false });
    }
  },

  fetchEvents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'http://localhost:5000/api/events/all',
        
      );
      const newData = response.data.events || [];

      const sliderEvents = newData.sort(() => 0.5 - Math.random()).slice(0, 12);

      set({
        events: sliderEvents,
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch events' });
    } finally {
      set({ loading: false });
    }
  },

   fetchMagazines: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        'http://localhost:5000/api/magazine?isPublic=true',
        
      );
      const newData = response.data.data || [];

      const sliderEvents = newData.sort(() => 0.5 - Math.random()).slice(0, 12);

      set({
        magazines: sliderEvents,
      });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch magazines' });
    } finally {
      set({ loading: false });
    }
  },

}));
