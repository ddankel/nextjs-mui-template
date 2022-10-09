import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));
Section.defaultProps = { component: "section" };

export default Section;
