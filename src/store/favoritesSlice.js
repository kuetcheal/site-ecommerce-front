import { createSlice } from "@reduxjs/toolkit";

const FAVORITES_STORAGE_KEY = "styleshop_favorites";

const loadFavoritesFromStorage = () => {
  try {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch (error) {
    return [];
  }
};

const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
};

const initialState = {
  items: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        state.items = state.items.filter((item) => item.id !== product.id);
      } else {
        state.items.push(product);
      }

      saveFavoritesToStorage(state.items);
    },

    removeFavorite: (state, action) => {
      const productId = action.payload;

      state.items = state.items.filter((item) => item.id !== productId);

      saveFavoritesToStorage(state.items);
    },

    clearFavorites: (state) => {
      state.items = [];

      localStorage.removeItem(FAVORITES_STORAGE_KEY);
    },
  },
});

export const { toggleFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;