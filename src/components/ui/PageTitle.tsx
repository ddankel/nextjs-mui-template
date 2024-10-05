import { Typography } from "@mui/material";

interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <Typography variant="h1" marginBottom={3}>
      {children}
    </Typography>
  );
};
