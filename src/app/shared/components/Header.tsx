import { Navigation } from "./Navigation";

export const Header = ({ user }: any) => {
  return (
    <header>
      <h1>Dashboard</h1>
      <div>
        <strong>Usuário:</strong> {user?.name}
      </div>
      <div>
        <strong>Email:</strong> {user?.email}
      </div>
      <Navigation />
    </header>
  );
};
