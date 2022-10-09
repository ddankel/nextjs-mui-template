import create from "zustand";
import { persist } from "zustand/middleware";

export const themeModes = { DARK: 1, LIGHT: 0 };

/**
 * Zustand-powered global state store to manage theme mode
 *
 * @see https://github.com/pmndrs/zustand
 */
let themeStore = (set, get) => ({
  currentMode: themeModes.DARK,
  setCurrentMode: (value) => set({ currentMode: value }),
});

// Wrap store in middleware to persist to localStorage
themeStore = persist(themeStore, { name: "themeStore", getStorage: () => localStorage });

// Create the zustand store.
const useThemeStore = create(themeStore);
export default useThemeStore;
