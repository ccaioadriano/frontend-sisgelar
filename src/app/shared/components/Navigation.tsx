import { Link } from "react-router-dom";

interface INavigationProps {
  branchId: number| undefined;
}
export const Navigation = (props: INavigationProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/filial/${props.branchId}/equipamentos`}>
            Equipamentos
          </Link>
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
