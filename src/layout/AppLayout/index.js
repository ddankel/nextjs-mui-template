import { useState } from "react";
import Masthead from "./Masthead";
import MobileDrawer from "./MobileDrawer";

const AppLayout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <Masthead onOpenMenu={handleMenuToggle} />
      <MobileDrawer open={isMenuOpen} onClose={handleMenuToggle} />
      {children}
    </>
  );
};

export default AppLayout;
