import axios from "axios";

const API_BASE_URL = "/api/v1";

export const request = async (siteRequest) => {
  return await axios.post(`${API_URL}/register`, siteRequest);
};
