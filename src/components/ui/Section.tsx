import Box from "@mui/material/Box";

interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <Box marginBottom={5} component="section">
      {children}
    </Box>
  );
};
