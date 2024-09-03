import axios from "axios";

// const BASE_URL = "http://localhost:8080";
const BASE_URL = "http://pd-structuri.ro:8081";

const API_URL = `${BASE_URL}/api/v1/auth`;

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
    });
    return response.data;
};

export const sendResetPasswordEmail = async (email) => {
    const respose = await axios.post(`${API_URL}/reset-password`, { email });
    return respose.data;
};

export const resetPassword = async (token, password) => {
    const response = await axios.put(`${API_URL}/reset-password`, {
        token,
        password,
    });
    return response.data;
};

export const enableUser = async (token) => {
    const response = await axios.put(`${API_URL}/enable/${token}`);
    return response.data;
};
