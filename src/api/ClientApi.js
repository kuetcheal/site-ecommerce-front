import { http } from "./http";

export const ClientApi = {
  getMe: async () => {
    return http.get("/clients/me");
  },
};