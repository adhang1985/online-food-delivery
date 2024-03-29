import axios from "axios";

const BASE_URL = "http://localhost:4001/api/foods";

export const getAllFoods = async() => {
    const response = await axios.get(BASE_URL);
    return response.data;
}