import { Branch, User } from "../../interfaces/User";
import { Navigation } from "./Navigation";
interface IUserHeader {
  user: User;
}
export const Header = (props: IUserHeader) => {
  return (
    <header>
      <h1>Dashboard</h1>
      <div>
        <strong>Usuário:</strong> {props.user?.name}
      </div>
      <div>
        <strong>Email:</strong> {props.user?.email}
      </div>

      <div>
        <strong>Nome da Filial:</strong> {props.user?.branch?.name}
      </div>
      <Navigation branchId={props.user?.branch?.id} />
    </header>
  );
};
