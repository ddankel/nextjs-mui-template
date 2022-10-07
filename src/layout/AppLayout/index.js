import { useState } from "react";
import { Container } from "@mui/material";

import Masthead from "./Masthead";
import MobileDrawer from "./MobileDrawer";

const AppLayout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <Masthead onOpenMenu={handleMenuToggle} />
      <MobileDrawer open={isMenuOpen} onClose={handleMenuToggle} />
      <Container maxWidth="md" sx={{ mb: 5 }}>
        {children}
      </Container>
    </>
  );
};

export default AppLayout;
