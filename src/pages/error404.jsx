import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome, FiShoppingBag, FiSearch } from "react-icons/fi";

const Error404 = () => {
  return (
    <main className="w-full min-h-[calc(100vh-80px)] bg-white">
      <section
        className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,10,25,0.78), rgba(5,10,25,0.84)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(147,51,234,0.22),_transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-pink-300 transition"
            >
              <FiArrowLeft />
              Retour à l’accueil
            </Link>

            <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-semibold backdrop-blur-md">
              <FiSearch />
              Page introuvable
            </div>

            <h1 className="mt-6 text-7xl md:text-9xl font-extrabold leading-none">
              404
            </h1>

            <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
              Oups, cette page n’existe pas.
            </h2>

            <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-8">
              La page que vous recherchez a peut-être été supprimée, déplacée ou
              l’adresse saisie est incorrecte. Vous pouvez revenir à l’accueil ou
              continuer votre shopping sur notre catalogue.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 transition"
              >
                <FiHome />
                Accueil
              </Link>

              <Link
                to="/produits"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-gray-900 font-bold uppercase hover:bg-pink-50 hover:text-pink-500 transition"
              >
                <FiShoppingBag />
                Voir les produits
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error404;