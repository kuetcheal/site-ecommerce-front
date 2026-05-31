import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft, FiHeart, FiShoppingBag, FiTrash2 } from "react-icons/fi";

import { useCart } from "../context/CartContext.jsx";
import {
  removeFavorite,
  clearFavorites,
} from "../store/favoritesSlice.js";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const Favoris = () => {
  const dispatch = useDispatch();
  const { addToCart } = useCart();

  const favorites = useSelector((state) => state.favorites.items);

  const handleRemoveFavorite = (productId) => {
    dispatch(removeFavorite(productId));
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  if (favorites.length === 0) {
    return (
      <main className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
            <FiHeart className="text-4xl" />
          </div>

          <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900">
            Aucun favori pour le moment
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-gray-500 leading-7">
            Ajoutez vos articles préférés à vos favoris pour les retrouver plus
            facilement avant de passer commande.
          </p>

          <Link
            to="/produits"
            className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 transition"
          >
            <FiShoppingBag />
            Voir les produits
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-500 transition"
        >
          <FiArrowLeft />
          Retour à l’accueil
        </Link>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-gray-200 pb-8">
          <div>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              Mes favoris
            </h1>

            <p className="mt-2 text-gray-500">
              Articles favoris :{" "}
              <span className="font-extrabold text-gray-900">
                {favorites.length}
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={handleClearFavorites}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-red-400 hover:text-red-500 transition"
          >
            <FiTrash2 />
            Vider les favoris
          </button>
        </div>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {favorites.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative h-[360px] bg-gray-100 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
                />

                <img
                  src={product.hoverImageUrl || product.imageUrl}
                  alt={`${product.name} au survol`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition duration-700 group-hover:opacity-100 group-hover:scale-100"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveFavorite(product.id)}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-pink-500 text-white hover:bg-gray-900 flex items-center justify-center shadow transition"
                  aria-label="Retirer des favoris"
                >
                  <FiHeart className="text-xl" />
                </button>

                {product.stock <= 0 && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-semibold">
                    Rupture
                  </span>
                )}

                <div className="absolute left-4 right-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <button
                    type="button"
                    onClick={() => addToCart(product, 1)}
                    disabled={product.stock <= 0}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <FiShoppingBag />
                    Ajouter au panier
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-pink-500 transition">
                      {product.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <p className="text-lg font-extrabold text-gray-900 whitespace-nowrap">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
                    {product.color}
                  </span>

                  <Link
                    to={`/produits/${product.id}`}
                    className="text-sm font-semibold text-pink-500 hover:text-pink-600 transition"
                  >
                    Détails
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Favoris;