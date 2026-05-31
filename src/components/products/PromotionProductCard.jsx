import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiTag } from "react-icons/fi";
import { useCart } from "../../context/CartContext.jsx";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const getDiscountPercent = (originalPrice, price) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

const PromotionProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const discount = getDiscountPercent(product.originalPrice, product.price);

  const handleFavorite = () => {
    console.log("Favori à gérer plus tard avec Redux :", product);
  };

  return (
    <article className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      <div className="relative h-[360px] overflow-hidden bg-gray-100">
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

        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-pink-500 text-white px-4 py-2 text-sm font-bold shadow">
          <FiTag />
          -{discount}%
        </div>

        <button
          type="button"
          onClick={handleFavorite}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 hover:bg-pink-500 hover:text-white flex items-center justify-center text-gray-800 shadow transition"
          aria-label="Ajouter aux favoris"
        >
          <FiHeart className="text-xl" />
        </button>

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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-500">
              {product.category}
            </p>

            <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-pink-500 transition">
              {product.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </p>

            <p className="text-xl font-extrabold text-pink-500">
              {formatPrice(product.price)}
            </p>
          </div>
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
  );
};

export default PromotionProductCard;