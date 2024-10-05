import { Box } from "@mui/material";

interface VisualDemoProps {
  children: React.ReactNode;
}

export const VisualDemo = ({ children }: VisualDemoProps) => {
  return (
    <Box border={1} borderRadius={1} borderColor="grey.700" padding={2} my={2}>
      {children}
    </Box>
  );
};
