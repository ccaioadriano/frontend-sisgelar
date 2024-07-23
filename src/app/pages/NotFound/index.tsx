import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Página não encontrada.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Desculpe, a página que você está procurando não existe.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleGoBack}
        >
          Voltar para página inicial.
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
