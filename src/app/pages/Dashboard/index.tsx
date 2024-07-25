import CloseIcon from "@mui/icons-material/Close";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../shared/contexts/AuthContext";
import { SideBarList } from "./components/SideBarList";

const drawerWidth = 240;

const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);
  const { logout, isAuthenticated, userAuth } = useContext(AuthContext);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setOpen(!isOpen);
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ marginRight: 2 }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {!isMobile && userAuth && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                Olá, {userAuth.name}
              </Typography>
              <Button color="inherit" onClick={logout}>
                <ExitToAppIcon />
              </Button>
            </Box>
          )}
          {isMobile && (
            <Button color="inherit" onClick={logout}>
              <ExitToAppIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SideBarList />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBarList />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Bem-vindo ao dashboard, {userAuth?.name}! Aqui você pode adicionar
          seus componentes principais.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
