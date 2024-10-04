"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Typography variant="h1" component="div">
          404
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Typography variant="body1">This page could not be found.</Typography>
      </Stack>
    </Wrapper>
  );
}
