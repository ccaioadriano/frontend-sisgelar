import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import ThemeLogin from "./ThemeLogin";
import { AuthContext } from "../../shared/contexts/AuthContext";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { login, loginError, isAuthenticated, setLoginError } =
    useContext(AuthContext);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(name, password);
  };

  useEffect(() => {
    if (loginError) {
      setOpen(true);
    }
  }, [loginError]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="dashboard" />;
  }

  return (
    <ThemeProvider theme={ThemeLogin}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h2">
            SISGELAR
          </Typography>
          {loginError && (
            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={() => {
                setOpen(false);
                setLoginError("");
              }}
            >
              <Alert
                onClose={() => {
                  setOpen(false);
                  setLoginError("");
                }}
                severity="error"
                variant="filled"
                sx={{ width: "100%" }}
              >
                {loginError}
              </Alert>
            </Snackbar>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueci minha senha
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
