import { http, setToken, removeToken } from "./http";

export const AuthApi = {
  register: async (clientData) => {
    const response = await http.post("/auth/register", clientData);

    if (response?.token) {
      setToken(response.token);
    }

    return response;
  },

  login: async (credentials) => {
    const response = await http.post("/auth/login", credentials);

    if (response?.token) {
      setToken(response.token);
    }

    return response;
  },

  logout: () => {
    removeToken();
  },
};