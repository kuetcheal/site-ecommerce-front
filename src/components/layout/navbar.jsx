import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiHeart,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const { cartCount } = useCart();

  const navClass = ({ isActive }) =>
    isActive
      ? "text-pink-500 font-semibold"
      : "text-gray-700 hover:text-pink-500 transition";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              S
            </div>

            <div className="leading-tight">
              <h1 className="text-xl font-extrabold text-gray-900">
                Style<span className="text-pink-500">Shop</span>
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Mode & accessoires
              </p>
            </div>
          </Link>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navClass}>
              Accueil
            </NavLink>

            <NavLink to="/produits" className={navClass}>
              Produits
            </NavLink>

            <NavLink to="/nouveautes" className={navClass}>
              Nouveautés
            </NavLink>

            {/* Dropdown catégories */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 hover:text-pink-500 transition"
              >
                Catégories
                <FiChevronDown className="text-sm mt-1" />
              </button>

              <div className="absolute left-0 top-8 w-56 bg-white border border-gray-100 shadow-xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <NavLink
                  to="/homme"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  Vêtements homme
                </NavLink>

                <NavLink
                  to="/femme"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  Vêtements femme
                </NavLink>

                <NavLink
                  to="/chaussures"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  Chaussures
                </NavLink>

                <NavLink
                  to="/montres"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  Montres
                </NavLink>

                <NavLink
                  to="/accessoires"
                  className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  Accessoires
                </NavLink>
              </div>
            </div>

            <NavLink to="/promotions" className={navClass}>
              Promotions
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>

          {/* Search desktop */}
          <div className="hidden xl:flex items-center w-72 bg-gray-100 rounded-full px-4 py-2 border border-gray-100 focus-within:border-pink-300 transition">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/panier"
              className="relative w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-50 flex items-center justify-center text-gray-700 hover:text-pink-500 transition"
            >
              <FiShoppingBag className="text-xl" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/connexion"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-pink-500 transition"
            >
              <FiUser />
              Connexion
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            {/* Search mobile */}
            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3 mb-5">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-sm w-full text-gray-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Accueil
              </NavLink>

              <NavLink
                to="/produits"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Produits
              </NavLink>

              <NavLink
                to="/nouveautes"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Nouveautés
              </NavLink>

              <button
                type="button"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500 flex items-center justify-between"
              >
                Catégories
                <FiChevronDown
                  className={`transition ${categoriesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {categoriesOpen && (
                <div className="ml-4 border-l border-gray-100 pl-3 flex flex-col gap-1">
                  <NavLink
                    to="/homme"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                  >
                    Vêtements homme
                  </NavLink>

                  <NavLink
                    to="/femme"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                  >
                    Vêtements femme
                  </NavLink>

                  <NavLink
                    to="/chaussures"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                  >
                    Chaussures
                  </NavLink>

                  <NavLink
                    to="/montres"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                  >
                    Montres
                  </NavLink>

                  <NavLink
                    to="/accessoires"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                  >
                    Accessoires
                  </NavLink>
                </div>
              )}

              <NavLink
                to="/promotions"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Promotions
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Contact
              </NavLink>

              <NavLink
                to="/connexion"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-pink-500"
              >
                Connexion
              </NavLink>
            </div>

            {/* Mobile actions */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <Link
                to="/favoris"
                onClick={() => setIsOpen(false)}
                className="py-3 rounded-2xl bg-gray-100 flex flex-col items-center gap-1 text-gray-700 text-sm"
              >
                <FiHeart className="text-xl" />
                Favoris
              </Link>

              <Link
                to="/panier"
                onClick={() => setIsOpen(false)}
                className="py-3 rounded-2xl bg-gray-100 flex flex-col items-center gap-1 text-gray-700 text-sm"
              >
                <FiShoppingBag className="text-xl" />
                Panier
              </Link>

              <Link
                to="/connexion"
                onClick={() => setIsOpen(false)}
                className="py-3 rounded-2xl bg-gray-900 text-white flex flex-col items-center gap-1 text-sm"
              >
                <FiUser className="text-xl" />
                Compte
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;