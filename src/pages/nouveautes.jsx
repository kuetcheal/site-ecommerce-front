import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiArrowLeft, FiStar } from "react-icons/fi";

import ProductGrid from "../components/products/ProductGrid.jsx";
import { newCollections } from "../data/productsData.js";

const Nouveautes = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return newCollections.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section
        className="relative w-full py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,10,25,0.72), rgba(5,10,25,0.78)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80')",
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
              <FiStar />
              Nouvelle collection StyleShop
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Découvrez nos nouveautés
            </h1>

            <p className="mt-5 text-white/80 text-base md:text-lg leading-8 max-w-2xl">
              Retrouvez les dernières pièces ajoutées à notre boutique :
              vêtements, chaussures, montres, sacs et accessoires tendance pour
              compléter votre style.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header résultats + recherche */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b border-gray-200 pb-7">
            <div>
              <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
                Collection récente
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
                Articles récemment ajoutés
              </h2>

              <p className="mt-2 text-gray-500">
                Résultats trouvés :{" "}
                <span className="font-extrabold text-gray-900">
                  {filteredProducts.length}
                </span>
              </p>
            </div>

            <div className="relative group w-full md:w-[340px] focus-within:md:w-[430px] transition-all duration-300">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une nouveauté..."
                className="w-full h-12 rounded-full bg-gray-100 border border-transparent pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
              />
            </div>
          </div>

          {/* Produits */}
          <div className="mt-10">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="py-20 text-center bg-gray-50 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900">
                  Aucun article trouvé
                </h3>

                <p className="mt-2 text-gray-500">
                  Essayez une autre recherche dans les nouveautés.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nouveautes;