import { useEffect, useState } from "react";
import { getEquipmentsPerBranch, getUserAuth } from "../../shared/services/api";
import { User } from "../../interfaces/User";

export const Equipments = () => {
  const [equipments, setEquipments] = useState<any[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserAuth();
        setUser(userData);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchEquipments = async () => {
      if (user?.branch) {
        try {
          setLoading(true);
          const {data} = await getEquipmentsPerBranch(user.branch.id);
          setEquipments(data);
        } catch (err) {
          setError("Failed to fetch equipments");
        } finally {
          setLoading(false);
        }
      }
    };

    if (user) {
      fetchEquipments();
    }
  }, [user]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Equipamentos</h1>
      {equipments.length > 0 ? (
        <ul>
          {equipments.map((equipment: any) => (
            <li key={equipment.id}>{equipment.type}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum equipamento encontrado.</p>
      )}
    </>
  );
};
