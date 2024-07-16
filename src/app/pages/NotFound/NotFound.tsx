import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h3>Página não encontrada!</h3>
      <Link to="/dashboard">Retornar para página inicial.</Link>
    </>
  );
};
