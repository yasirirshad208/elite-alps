// store/modalStore.ts
import { create } from 'zustand';

type ModalStore = {
  isInquiryOpen: boolean;
  openInquiry: () => void;
  closeInquiry: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isInquiryOpen: false,
  openInquiry: () => set({ isInquiryOpen: true }),
  closeInquiry: () => set({ isInquiryOpen: false }),
}));
