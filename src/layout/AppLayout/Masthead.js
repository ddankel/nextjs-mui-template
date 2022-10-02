import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "@/ui/Link";
import { styled } from "@mui/system";

const MastLink = styled(Link)({ color: "white" });
MastLink.defaultProps = { underline: "none" };

import navStructure from "./navStructure.json";
console.log("nS", navStructure);

const Masthead = ({ onOpenMenu }) => {
  return (
    <AppBar component="nav" position="static" sx={{ mb: 4 }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component={MastLink} href="/" sx={{ flexGrow: 1 }}>
            p l a c e h o l d e r . c o m
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            component="nav"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <MastLink href="/">Home</MastLink>
            <MastLink href="/">Links</MastLink>
            <MastLink href="/">Styles</MastLink>
            <MastLink href="https://github.com/ddankel/nextjs-mui-template" external>
              Github
            </MastLink>
          </Stack>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onOpenMenu}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Masthead;
