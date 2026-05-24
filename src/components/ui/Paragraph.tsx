import { Typography, TypographyProps } from "@mui/material";

export const Paragraph = (props: TypographyProps) => {
  const { sx, ...restProps } = props;
  return (
    <Typography
      variant="body1"
      sx={[{ mb: "1rem" }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...restProps}
    />
  );
};
