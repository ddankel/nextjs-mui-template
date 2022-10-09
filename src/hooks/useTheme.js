import { useMemo } from "react";
import { darkTheme } from "@/styles/darkTheme";
import { lightTheme } from "@/styles/lightTheme";

import useThemeStore, { themeModes } from "@/hooks/useThemeStore";

/**
 * Hook to return the proper theme file based on the current theme mode
 */
const useTheme = () => {
  // const [mode, setMode] = useThemeMode();
  const mode = useThemeStore((state) => state.currentMode);
  const setMode = useThemeStore((state) => state.setCurrentMode);

  const theme = useMemo(() => (mode === themeModes.LIGHT ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => setMode(mode === themeModes.DARK ? themeModes.LIGHT : themeModes.DARK);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
