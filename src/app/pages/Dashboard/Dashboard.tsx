import { useEffect, useState } from "react";
import { getUserAuth } from "../../shared/services/api";
import { User } from "../../interfaces/User";
import { Header } from "../../shared/components/Header";

export const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const userData = await getUserAuth();
        setUser(userData);
      };
      fetchUser();

      console.log(user);
    } catch (error) {}
  }, []);

  return <>{user ? <Header user={user} /> : <>usuario indefinido</>}</>;
};
