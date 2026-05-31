import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext.jsx";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/favoritesSlice.js";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const ProductGrid = ({ products }) => {
  const { addToCart } = useCart();

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  const handleFavorite = (product) => {
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {products.map((product) => (
        <article
          key={product.id}
          className="group bg-white overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
        >
          <div className="relative h-[360px] bg-gray-100 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
            />

            <img
              src={product.hoverImageUrl}
              alt={`${product.name} au survol`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition duration-700 group-hover:opacity-100 group-hover:scale-100"
            />

            {/* Bouton favoris avec Redux */}
            <button
              type="button"
              onClick={() => handleFavorite(product)}
              className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center shadow transition ${
                isFavorite(product.id)
                  ? "bg-pink-500 text-white"
                  : "bg-white/90 text-gray-800 hover:bg-pink-500 hover:text-white"
              }`}
              aria-label="Ajouter aux favoris"
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

          <div className="py-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-500 transition">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>

              <p className="text-lg font-extrabold text-gray-900 whitespace-nowrap">
                {formatPrice(product.price)}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
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
    </div>
  );
};

export default ProductGrid;