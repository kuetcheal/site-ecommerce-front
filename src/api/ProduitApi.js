import { http } from "./http";

export const ProduitApi = {
  getAll: async () => {
    return http.get("/produits");
  },

  getById: async (id) => {
    return http.get(`/produits/${id}`);
  },

  create: async (produitData) => {
    const formData = new FormData();

    formData.append("name", produitData.name);
    formData.append("price", produitData.price);
    formData.append("description", produitData.description || "");
    formData.append("stock", produitData.stock);
    formData.append("color", produitData.color || "");

    if (produitData.image) {
      formData.append("image", produitData.image);
    }

    return http.post("/produits", formData, true);
  },

  update: async (id, produitData) => {
    const formData = new FormData();

    formData.append("name", produitData.name);
    formData.append("price", produitData.price);
    formData.append("description", produitData.description || "");
    formData.append("stock", produitData.stock);
    formData.append("color", produitData.color || "");

    if (produitData.image) {
      formData.append("image", produitData.image);
    }

    return http.put(`/produits/${id}`, formData, true);
  },

  delete: async (id) => {
    return http.delete(`/produits/${id}`);
  },
};