import { Box, Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import useTheme from "@/hooks/useTheme";

const ThemeSwitch = () => {
  const { mode, toggleTheme, themeModes } = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <DarkModeIcon />
      <Switch checked={mode === themeModes.LIGHT} onChange={() => toggleTheme()} />
      <LightModeIcon />
    </Box>
  );
};

export default ThemeSwitch;
