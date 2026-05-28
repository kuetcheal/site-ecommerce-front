const ProductRoundCategories = ({ categories, onSelectCategory }) => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex items-start gap-8 min-w-max lg:min-w-0 lg:justify-between">
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            onClick={() => onSelectCategory(category)}
            className="group flex flex-col items-center text-center w-28"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-gray-100">
              <img
                src={category.image}
                alt={category.label}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <span className="mt-3 text-xs md:text-sm font-medium text-gray-900 leading-tight group-hover:text-pink-500 transition">
              {category.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductRoundCategories;