import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SideBarList = () => {
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
      <List sx={{ width: "100%", position: "absolute", top: "7%" }}>
        <ListItemButton onClick={() => navigate("/profile")}>
          <ListItemText primary="Equipamentos" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/settings")}>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      <Divider />
    </Box>
  );
};
