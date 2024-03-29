import axios from "axios";

const BASE_URL = "http://localhost:4001/api/register";

export const createUser = async(data) => {
    const response = await axios.post(BASE_URL,data);
    return response.data;
}