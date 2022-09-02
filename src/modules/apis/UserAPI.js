import axios from "axios";
import { IP_SERVER, PORT_SERVER } from "../../../config";

const BASE_URL = `${IP_SERVER}:${PORT_SERVER}/user/`;

export const register = (data) => {
    return axios.post(BASE_URL + 'register', data);
}

export const login = (email, password) => {
    return axios.post(BASE_URL + 'login', { email, password });
}