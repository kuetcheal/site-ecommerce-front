import { useMemo, useState } from "react";
import { FiGrid, FiSearch } from "react-icons/fi";

import ProductFilters from "../components/products/ProductFilters.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import ProductRoundCategories from "../components/products/ProductRoundCategories.jsx";

import { shopProducts, shopCategories } from "../data/shopProductsData.js";

const Produit = () => {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    catégorie: [],
    genre: [],
    typedeproduit: [],
    couleur: [],
  });

  const handleRoundCategory = (category) => {
    if (category.value === "Chaussures" || category.value === "Montres") {
      setFilters((prev) => ({
        ...prev,
        catégorie: [category.value],
      }));
      return;
    }

    if (category.value === "Homme" || category.value === "Femme") {
      setFilters((prev) => ({
        ...prev,
        genre: [category.value],
      }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      typedeproduit: [category.value],
    }));
  };

  const filteredProducts = useMemo(() => {
    return shopProducts.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const minPriceMatch =
        !filters.minPrice || product.price >= Number(filters.minPrice);

      const maxPriceMatch =
        !filters.maxPrice || product.price <= Number(filters.maxPrice);

      const categoryMatch =
        filters.catégorie.length === 0 ||
        filters.catégorie.includes(product.category);

      const genderMatch =
        filters.genre.length === 0 || filters.genre.includes(product.gender);

      const typeMatch =
        filters.typedeproduit.length === 0 ||
        filters.typedeproduit.includes(product.type);

      const colorMatch =
        filters.couleur.length === 0 || filters.couleur.includes(product.color);

      return (
        searchMatch &&
        minPriceMatch &&
        maxPriceMatch &&
        categoryMatch &&
        genderMatch &&
        typeMatch &&
        colorMatch
      );
    });
  }, [search, filters]);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10">
          <ProductFilters filters={filters} setFilters={setFilters} />

          <main className="flex-1 py-10">
            <section className="text-center max-w-4xl mx-auto">
              {/* <h1 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900">
                Découvrez nos vêtements, chaussures, montres et accessoires
              </h1> */}

              <p className="mt-4 text-gray-600 leading-7">
                Nous vous proposons une large sélection d’articles pour compléter votre style :
                tenues modernes, chaussures tendance, montres élégantes, bijoux, sacs et accessoires
                pour le quotidien ou les grandes occasions.
              </p>
            </section>

            <section className="mt-10">
              <ProductRoundCategories
                categories={shopCategories}
                onSelectCategory={handleRoundCategory}
              />
            </section>

            <div className="mt-10 border-t border-gray-200 pt-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="flex items-center gap-4">
                  <FiGrid className="text-2xl text-gray-900" />

                  <p className="text-sm md:text-base text-gray-700">
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
                    placeholder="Rechercher un article par nom..."
                    className="w-full h-12 rounded-full bg-gray-100 border border-transparent pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                  />
                </div>
              </div>
            </div>

            <section className="mt-8">
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="py-20 text-center bg-gray-50 rounded-3xl">
                  <h2 className="text-xl font-bold text-gray-900">
                    Aucun produit trouvé
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Essayez de modifier votre recherche ou vos filtres.
                  </p>
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Produit;