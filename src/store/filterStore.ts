import { create } from "zustand";

type FilterState = {
  category: string;
  setCategory: (value: string) => void;
};

export const useProjectFilter = create<FilterState>((set) => ({
  category: "All",
  setCategory: (value) => set({ category: value }),
}));
