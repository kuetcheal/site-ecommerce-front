import { FiSliders, FiChevronRight } from "react-icons/fi";

const filterGroups = [
  {
    title: "Catégorie",
    options: ["Vêtements", "Chaussures", "Montres", "Accessoires"],
  },
  {
    title: "Genre",
    options: ["Homme", "Femme", "Mixte"],
  },
  {
    title: "Type de produit",
    options: ["T-shirt", "Robe", "Sneakers", "Montre", "Sac", "Bijou", "Lunettes", "Casquette"],
  },
  {
    title: "Couleur",
    options: ["Blanc", "Noir", "Rose", "Bleu", "Argent", "Doré", "Marron", "Crème"],
  },
];

const ProductFilters = ({ filters, setFilters }) => {
  const toggleOption = (groupTitle, option) => {
    const key = groupTitle.toLowerCase().replaceAll(" ", "");

    setFilters((prev) => {
      const currentValues = prev[key] || [];

      const nextValues = currentValues.includes(option)
        ? currentValues.filter((item) => item !== option)
        : [...currentValues, option];

      return {
        ...prev,
        [key]: nextValues,
      };
    });
  };

  const handlePriceChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <aside className="hidden lg:block w-[280px] shrink-0 border-r border-gray-200 pr-6">
      <div className="sticky top-28">
        <div className="border-b border-gray-200 pb-5 mb-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Prix</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                de
              </span>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => handlePriceChange("minPrice", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 pl-9 pr-3 text-sm outline-none focus:border-pink-400"
                placeholder="0"
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                à
              </span>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
                className="w-full h-12 rounded-lg border border-gray-200 pl-8 pr-3 text-sm outline-none focus:border-pink-400"
                placeholder="100"
              />
            </div>
          </div>
        </div>

        {filterGroups.map((group) => {
          const key = group.title.toLowerCase().replaceAll(" ", "");
          const selectedValues = filters[key] || [];

          return (
            <div key={group.title} className="border-b border-gray-200 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium text-gray-900">
                  {group.title}
                </h3>
                <FiChevronRight className="text-gray-500" />
              </div>

              <div className="space-y-2">
                {group.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:text-pink-500"
                  >
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option)}
                      onChange={() => toggleOption(group.title, option)}
                      className="w-4 h-4 accent-pink-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          );
        })}

        {/* <button
          type="button"
          onClick={() =>
            setFilters({
              minPrice: "",
              maxPrice: "",
              catégorie: [],
              genre: [],
              typedeproduit: [],
              couleur: [],
            })
          }
          className="mt-6 w-full h-11 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-pink-500 transition"
        >
          Réinitialiser les filtres
        </button> */}
      </div>
    </aside>
  );
};

export default ProductFilters;