import { create } from "zustand";

export const useStore = create((set, get) => ({
  //@ts-ignore
  searchValue: '',
  setSearchValue: (newSearchvalue:string) => set((state:any) => ({ searchValue: newSearchvalue})),
  //@ts-ignore
  searchBook: '',
  setBookValue: (newBookvalue:string) => set((state:any) => ({ searchBook: newBookvalue})),
}));