import { Link } from "@/ui/Link";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import navStructure from "./navStructure.json";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
  return (
    <Box component="nav">
      <Drawer
        anchor="right"
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
      >
        <Box onClick={() => {}} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2, letterSpacing: "4px" }}>
            nextjs-mui-template
          </Typography>
          <Divider />
          <List>
            {navStructure.map((navItem) => (
              <ListItem key={navItem.label} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  component={Link}
                  href={navItem.to}
                  external={navItem.external}
                  onClick={onClose}
                >
                  <ListItemText primary={navItem.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
