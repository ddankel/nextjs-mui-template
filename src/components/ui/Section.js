import Box from "@mui/material/Box";

const Section = ({ children }) => {
  return (
    <Box marginBottom={3} component="section">
      {children}
    </Box>
  );
};

export default Section;
