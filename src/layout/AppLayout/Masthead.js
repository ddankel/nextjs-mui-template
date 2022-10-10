import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "@/ui/Link";
import { styled } from "@mui/system";
import navStructure from "./navStructure.json";

const MastLink = styled(Link)({ color: "white" });
MastLink.defaultProps = { underline: "none" };

const Masthead = ({ onOpenMenu }) => {
  return (
    <AppBar component="nav" position="static" sx={{ mb: 4 }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="h6"
            component={MastLink}
            href="/"
            sx={{ flexGrow: 1, letterSpacing: "4px" }}
          >
            placeholder.com
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            component="nav"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navStructure.map((navItem) => (
              <MastLink href={navItem.to} external={navItem.external} key={navItem.label}>
                {navItem.label}
              </MastLink>
            ))}
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
