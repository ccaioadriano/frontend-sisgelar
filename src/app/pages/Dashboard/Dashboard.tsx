import { useEffect, useState } from "react";
import { getUserAuth } from "../../shared/services/apiServices";
import { User } from "../../interfaces/User";
import { Header } from "../../shared/components/Header";

export const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserAuth();
      setUser(userData);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Header user={user} />
    </>
  );
};
