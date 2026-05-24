import Box from "@mui/material/Box";

interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <Box component="section" sx={{ mb: 2 }}>
      {children}
    </Box>
  );
};
