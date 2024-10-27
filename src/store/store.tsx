// Update Zustand store to include trending books data
import { create } from "zustand";
export const useStore = create((set, get) => ({
  searchValue: '',
  setSearchValue: (newSearchvalue : string) => set(() => ({ searchValue: newSearchvalue })),

  searchBook: '',
  setBookValue: (newBookvalue :string) => set(() => ({ searchBook: newBookvalue })),
  
  trendingBooks: [],
  setTrendingBooks: (books : string) => set(() => ({ trendingBooks: books })),
}));
