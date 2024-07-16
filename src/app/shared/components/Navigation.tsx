import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/equipamentos">Equipamentos</Link>
        </li>
        <li>
          <Link to="/historico">Histórico de Manutenções</Link>
        </li>
        <li>
          <Link to="/calendario">Calendário</Link>
        </li>
      </ul>
    </nav>
  );
};
