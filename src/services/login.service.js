import axios from "axios";

const BASE_URL = "http://localhost:4001/api/login";

export const loginUser = async(data) => {
    const response = await axios.post(BASE_URL,data);
    return response.data;
}