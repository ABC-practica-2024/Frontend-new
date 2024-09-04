import axios from 'axios';

const BASE_URL = 'http://pd-structuri.ro:8081';

const API_BASE_URL = `${BASE_URL}/api/v1`;

// GET /api/v1/site
export const getSites = async () => {
    const response = await axios.get(`${API_BASE_URL}/site`);
    return response.data;
}

// GET /api/v1/site/{id}
export const getSiteById = async (siteId) => {
    const response = await axios.get(`${API_BASE_URL}/site/${siteId}`);
    return response.data;
}

// POST /api/v1/site
export const createSite = async (site) => {
    const response = await axios.post(`${API_BASE_URL}/site`, site);
    return response.data;
}

// PUT /api/v1/site
export const updateSite = async (site) => {
    const response = await axios.put(`${API_BASE_URL}/site`, site);
    return response.data;
}

// DELETE /api/v1/site/{id}
export const deleteSite = async (siteId) => {
    const response = await axios.delete(`${API_BASE_URL}/site/${siteId}`);
    return response.data;
}

