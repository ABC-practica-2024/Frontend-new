import axios from "axios";

// const BASE_URL = "http://localhost:8080";
const BASE_URL = "http://pd-structuri.ro:8081";

const API_URL = `${BASE_URL}/api/v1/auth`;

export const register = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
};

export const sendResetPasswordEmail = async (email) => {
    return await axios.post(`${API_URL}/reset-password`, { email });
};

export const resetPassword = async (token, password) => {
    return await axios.put(`${API_URL}/reset-password`, {
        token,
        password,
    });
};

export const enableUser = async (token) => {
    return await axios.put(`${API_URL}/enable/${token}`);
};
