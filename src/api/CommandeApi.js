import { http } from "./http";

export const CommandeApi = {
  payer: async (items) => {
    return http.post("/commandes/payer", {
      items,
    });
  },

  mesCommandes: async () => {
    return http.get("/commandes/mes-commandes");
  },

  getById: async (id) => {
    return http.get(`/commandes/${id}`);
  },

  redirectToStripe: (checkoutUrl) => {
    window.location.href = checkoutUrl;
  },
};