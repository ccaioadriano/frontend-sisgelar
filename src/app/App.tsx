import { ThemeProvider } from "@emotion/react";
import { RouterApp } from "./routes";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./shared/contexts/AuthContext";
import { CssBaseline } from "@mui/material";
import Theme from "./shared/theme/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
