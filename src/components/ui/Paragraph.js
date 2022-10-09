import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Paragraph = styled(Typography)`
  margin-bottom: 1rem;
`;
Paragraph.defaultProps = { variant: "body1" };

export default Paragraph;
