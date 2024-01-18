import { create } from 'zustand';

interface SideNav {
  open: boolean | undefined;
  setOpen: (value: boolean) => void;
}

export const useToggleSideNav = create<SideNav>((set) => ({
  open: undefined,
  setOpen: (value) => set(() => ({ open: value })),
}));
