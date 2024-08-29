import axios from "axios";

const API_URL = "/api/v1/auth";

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
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
