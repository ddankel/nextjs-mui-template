import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
PageTitle.defaultProps = { variant: "h1" };

export default PageTitle;
