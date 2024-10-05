import { Typography } from "@mui/material";

const PageTitle = ({ children }) => {
  return (
    <Typography variant="h1" marginBottom={3}>
      {children}
    </Typography>
  );
};

export default PageTitle;
