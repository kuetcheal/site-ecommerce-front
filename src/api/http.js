const API_URL_BASE = import.meta.env.VITE_API_URL_BASE || "http://localhost:8081/api";

const TOKEN_KEY = "site_ecommerce_token";

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const buildHeaders = (isFormData = false) => {
  const token = getToken();

  const headers = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

const handleResponse = async (response) => {
  const contentType = response.headers.get("content-type");

  let data = null;

  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      data ||
      "Une erreur est survenue lors de la requête.";

    throw new Error(message);
  }

  return data;
};

export const http = {
  get: async (endpoint) => {
    const response = await fetch(`${API_URL_BASE}${endpoint}`, {
      method: "GET",
      headers: buildHeaders(),
    });

    return handleResponse(response);
  },

  post: async (endpoint, body, isFormData = false) => {
    const response = await fetch(`${API_URL_BASE}${endpoint}`, {
      method: "POST",
      headers: buildHeaders(isFormData),
      body: isFormData ? body : JSON.stringify(body),
    });

    return handleResponse(response);
  },

  put: async (endpoint, body, isFormData = false) => {
    const response = await fetch(`${API_URL_BASE}${endpoint}`, {
      method: "PUT",
      headers: buildHeaders(isFormData),
      body: isFormData ? body : JSON.stringify(body),
    });

    return handleResponse(response);
  },

  delete: async (endpoint) => {
    const response = await fetch(`${API_URL_BASE}${endpoint}`, {
      method: "DELETE",
      headers: buildHeaders(),
    });

    if (response.status === 204) {
      return null;
    }

    return handleResponse(response);
  },
};