import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice.js";

import {
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiHeart,
  FiShoppingBag,
  FiTruck,
  FiRefreshCcw,
} from "react-icons/fi";

import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";

import { shopProducts } from "../data/shopProductsData";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const ProductDetail = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);

  const product = useMemo(() => {
    return shopProducts.find((item) => item.id === Number(id));
  }, [id]);

  const productImages = useMemo(() => {
    if (!product) return [];

    return [
      product.imageUrl,
      product.hoverImageUrl,
      product.extraImageUrl,
    ].filter(Boolean);
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const isFavorite = product
    ? favorites.some((item) => item.id === product.id)
    : false;

  if (!product) {
    return (
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Produit introuvable
          </h1>

          <p className="mt-3 text-gray-500">
            Le produit demandé n’existe pas ou n’est plus disponible.
          </p>

          <Link
            to="/produits"
            className="mt-8 inline-flex px-7 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-pink-500 transition"
          >
            Retour aux produits
          </Link>
        </div>
      </section>
    );
  }

  const currentImage = productImages[activeImageIndex] || product.imageUrl;

  const handlePreviousImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(product.stock, prev + 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Produit ajouté au panier");
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-pink-500 transition">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link to="/produits" className="hover:text-pink-500 transition">
            Produits
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Galerie images */}
          <div>
            <div className="relative bg-gray-100 overflow-hidden rounded-3xl">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-[430px] md:h-[600px] object-cover"
              />

              {productImages.length > 1 && (
                <button
                  type="button"
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-pink-500 hover:text-white shadow-lg flex items-center justify-center text-gray-900 transition"
                  aria-label="Image précédente"
                >
                  <FiChevronLeft className="text-3xl" />
                </button>
              )}

              {productImages.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-pink-500 hover:text-white shadow-lg flex items-center justify-center text-gray-900 transition"
                  aria-label="Image suivante"
                >
                  <FiChevronRight className="text-3xl" />
                </button>
              )}
            </div>

            {productImages.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-xl border-2 transition ${
                      activeImageIndex === index
                        ? "border-pink-500"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informations produit */}
          <div className="lg:border-l lg:border-gray-200 lg:pl-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-extrabold text-pink-500">
              {formatPrice(product.price)}
            </p>

            <div className="mt-7 space-y-4 text-gray-600 leading-7">
              <p>{product.description}</p>

              <p>
                Cet article est pensé pour compléter votre style avec une touche
                moderne et élégante. Il s’adapte facilement à vos tenues du
                quotidien comme à vos sorties plus habillées.
              </p>

              <p>
                Couleur principale :{" "}
                <span className="font-semibold text-gray-900">
                  {product.color}
                </span>
                . Genre :{" "}
                <span className="font-semibold text-gray-900">
                  {product.gender}
                </span>
                . Type :{" "}
                <span className="font-semibold text-gray-900">
                  {product.type}
                </span>
                .
              </p>
            </div>

            {/* Sélecteur couleur */}
            <div className="mt-10 border-t border-gray-200 pt-7">
              <div className="grid grid-cols-[120px_1fr] items-center gap-5">
                <p className="text-sm font-bold uppercase text-gray-900">
                  Couleur
                </p>

                <div className="h-12 border-b border-gray-300 flex items-center text-gray-700">
                  {product.color}
                </div>
              </div>
            </div>

            {/* Quantité */}
            <div className="mt-7">
              <div className="grid grid-cols-[120px_1fr] items-center gap-5">
                <p className="text-sm font-bold uppercase text-gray-900">
                  Quantité
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border-b border-gray-300">
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      className="w-10 h-10 text-lg text-gray-700 hover:text-pink-500 transition"
                    >
                      -
                    </button>

                    <span className="w-10 text-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={increaseQuantity}
                      className="w-10 h-10 text-lg text-gray-700 hover:text-pink-500 transition"
                    >
                      +
                    </button>
                  </div>

                  {product.stock > 0 ? (
                    <span className="inline-flex items-center gap-2 text-green-600 text-sm font-medium">
                      <FiCheck />
                      En stock
                    </span>
                  ) : (
                    <span className="text-red-500 text-sm font-semibold">
                      Rupture de stock
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className="flex-1 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 disabled:opacity-50 transition flex items-center justify-center gap-2"
              >
                <FiShoppingBag />
                Ajouter au panier
              </button>

              <button
                type="button"
                onClick={handleFavorite}
                className={`h-12 px-6 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
                  isFavorite
                    ? "bg-pink-500 text-white border border-pink-500"
                    : "border border-gray-300 text-gray-900 hover:border-pink-500 hover:text-pink-500"
                }`}
              >
                <FiHeart />
                {isFavorite ? "Retirer des favoris" : "Favoris"}
              </button>
            </div>

            {/* Points / avantages */}
            <div className="mt-8 rounded-2xl border border-pink-200 bg-pink-50/60 px-5 py-4 text-sm text-gray-700">
              Ce produit vous rapporte{" "}
              <span className="font-extrabold text-gray-900">
                {Math.round(product.price * 10)} points
              </span>
              . Utilisez vos points plus tard pour obtenir des réductions.
            </div>

            {/* Services */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-4">
                <FiTruck className="text-2xl text-pink-500" />
                <div>
                  <p className="font-bold text-gray-900">Livraison rapide</p>
                  <p className="text-sm text-gray-500">
                    Suivi de commande inclus
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-4 py-4">
                <FiRefreshCcw className="text-2xl text-pink-500" />
                <div>
                  <p className="font-bold text-gray-900">Retour possible</p>
                  <p className="text-sm text-gray-500">Sous conditions</p>
                </div>
              </div>
            </div>

            {/* Partage */}
            <div className="mt-14">
              <div className="flex items-center gap-5">
                <div className="h-px flex-1 bg-gray-200" />
                <p className="px-8 py-2 rounded-full border border-pink-300 text-gray-900 font-extrabold uppercase">
                  Partager
                </p>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="mt-7 flex items-center justify-center gap-5">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-gray-900 transition"
                >
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;