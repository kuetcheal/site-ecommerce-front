import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCart } from "../../context/CartContext.jsx";
import {
  FiHeart,
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const ProductCarousel = ({
  title,
  subtitle,
  products = [],
  viewAllLink = "/produits",
  carouselId = "products",
  onFavorite,
}) => {
  const { addToCart } = useCart();

  const handleFavorite = (product) => {
    if (onFavorite) {
      onFavorite(product);
      return;
    }

    console.log("Produit ajouté aux favoris :", product);
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
          <div>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 text-gray-500 max-w-2xl">{subtitle}</p>
            )}
          </div>

          <Link
            to={viewAllLink}
            className="text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-pink-500 transition"
          >
            Voir tous les produits
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={22}
            navigation={{
              prevEl: `.prev-${carouselId}`,
              nextEl: `.next-${carouselId}`,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <article className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                  {/* Image */}
                  <div className="relative h-[330px] overflow-hidden bg-gray-100">
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

                    {/* Badge stock */}
                    <div className="absolute top-4 left-4">
                      {product.stock > 0 ? (
                        <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-gray-800 shadow">
                          Stock : {product.stock}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-red-500 text-xs font-semibold text-white shadow">
                          Rupture
                        </span>
                      )}
                    </div>

                    {/* Bouton favoris */}
                    <button
                      type="button"
                      onClick={() => handleFavorite(product)}
                      className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 hover:bg-pink-500 hover:text-white flex items-center justify-center text-gray-800 shadow transition"
                      aria-label="Ajouter aux favoris"
                    >
                      <FiHeart className="text-xl" />
                    </button>

                    {/* Bouton panier */}
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

                  {/* Infos */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-500 transition">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flèches */}
          <button
            type="button"
            className={`prev-${carouselId} hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-gray-800 hover:text-pink-500 transition`}
            aria-label="Précédent"
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            type="button"
            className={`next-${carouselId} hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-gray-800 hover:text-pink-500 transition`}
            aria-label="Suivant"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;