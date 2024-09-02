import axios from "axios";

const BASE_URL = "http://localhost:8080";
// const BASE_URL = "http://pd-structuri.ro:8081";

const API_URL = `${BASE_URL}/api/v1/auth`;

export const register = async (userData) => {
    console.log(`${API_URL}/register`);
    console.log(userData);
    const response = await axios.post(`${API_URL}/register`, userData);
    console.log("register");
    console.log(response);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

export const sendResetPasswordEmail = async (email) => {
    const response = await axios.post(`${API_URL}/reset-password`, { email });
    return response.data;
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
