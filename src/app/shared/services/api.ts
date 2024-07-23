import axios from "./BaseService";
const API_URL = "http://127.0.0.1:8000/api";


export const getEquipmentsPerBranch = async (branchId:number) => {
    const response = await axios
        .get(`${API_URL}/branches/${branchId}/equipments`);
    return response.data;
}