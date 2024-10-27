import { create } from "zustand";

export const useStore = create((set) => ({
  searchValue: '',
  setSearchValue: (newSearchValue:string) => set(() => ({ searchValue: newSearchValue })),

  searchBook: '',
  setBookValue: (newBookValue:string) => set(() => ({ searchBook: newBookValue })),
  
  trendingBooks: [], // Ensure it's initialized as an array
  setTrendingBooks: (books:string) => set(() => ({ trendingBooks: books })),
}));
