import { Box } from "@mui/material";

interface VisualDemoProps {
  children: React.ReactNode;
}

export const VisualDemo = ({ children }: VisualDemoProps) => {
  return (
    <Box sx={{ border: 1, borderRadius: 1, borderColor: "grey.700", p: 2, my: 2 }}>
      {children}
    </Box>
  );
};
