import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiPercent, FiSearch, FiClock } from "react-icons/fi";

import PromotionProductCard from "../components/products/PromotionProductCard.jsx";
import { promotionProducts } from "../data/promotionsData.js";

const categories = ["Tous", "Vêtements", "Chaussures", "Montres", "Accessoires", "Bijoux"];

const Promotions = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProducts = useMemo(() => {
    return promotionProducts.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        activeCategory === "Tous" || product.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section
        className="relative w-full py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,10,25,0.74), rgba(5,10,25,0.82)), url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-pink-300 transition"
          >
            <FiArrowLeft />
            Retour à l’accueil
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-semibold backdrop-blur-md">
              <FiPercent />
              Offres limitées StyleShop
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Promotions & bons plans
            </h1>

            <p className="mt-5 text-white/80 text-base md:text-lg leading-8 max-w-2xl">
              Profitez de réductions sur une sélection de vêtements, chaussures,
              montres, bijoux et accessoires. Des articles tendance à prix réduits,
              disponibles pour une durée limitée.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-pink-500/90 px-5 py-3 text-sm font-semibold shadow-lg">
              <FiClock />
              Offres disponibles jusqu’à épuisement du stock
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + recherche */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-gray-200 pb-8">
            <div>
              <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
                Sélection promotionnelle
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
                Articles en promotion
              </h2>

              <p className="mt-2 text-gray-500">
                Résultats trouvés :{" "}
                <span className="font-extrabold text-gray-900">
                  {filteredProducts.length}
                </span>
              </p>
            </div>

            <div className="relative group w-full lg:w-[360px] focus-within:lg:w-[440px] transition-all duration-300">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une promotion..."
                className="w-full h-12 rounded-full bg-gray-100 border border-transparent pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
              />
            </div>
          </div>

          {/* Filtres catégories */}
          <div className="mt-8 flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                  activeCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grille produits */}
          <div className="mt-10">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {filteredProducts.map((product) => (
                  <PromotionProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-gray-50 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900">
                  Aucune promotion trouvée
                </h3>

                <p className="mt-2 text-gray-500">
                  Essayez une autre recherche ou une autre catégorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Promotions;