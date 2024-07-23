// src/components/Sidebar.tsx

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "background.paper",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List>
        <ListItemButton onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/profile")}>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/settings")}>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );
};

export default Sidebar;
