import { useEffect, useState } from "react";
import { getEquipmentsPerBranch } from "../../shared/services/apiServices";

export const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    const fetchEquipments = async () => {
      //:todo => buscar a branch do usuario logado
      const response = await getEquipmentsPerBranch(2);
      setEquipments(response.data);
    };
    fetchEquipments();
  }, []);

  return (
    <>
      <h1>Equipamentos</h1>
      <ul>
        {equipments.map((equipment: any, key) => {
          return <li key={key}>{equipment.type}</li>;
        })}
      </ul>
    </>
  );
};
