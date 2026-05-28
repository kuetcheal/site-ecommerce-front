const Description = () => {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image gauche */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80"
              alt="Collection StyleShop"
              className="relative w-full h-[360px] md:h-[480px] object-cover shadow-2xl"
            />
          </div>

          {/* Texte droite */}
          <div>
            {/* <p className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-5">
              Mode, élégance & accessoires
            </p> */}

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              StyleShop, votre boutique en ligne dédiée à la mode moderne
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-5">
              StyleShop est une boutique e-commerce spécialisée dans la vente de
              vêtements, chaussures, montres, bijoux et accessoires de mode. Notre
              objectif est de proposer des articles tendances, accessibles et adaptés
              à tous les styles.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-5">
              Que vous recherchiez une tenue élégante, un look urbain, une paire de
              chaussures confortable ou un accessoire pour compléter votre style,
              notre catalogue vous accompagne dans vos choix du quotidien.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Une expérience simple et agréable
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">
              Grâce à une navigation claire, des catégories bien organisées et un
              paiement sécurisé, StyleShop facilite vos achats en ligne tout en vous
              offrant une expérience moderne, rapide et responsive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/produits"
                className="inline-flex justify-center px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Découvrir nos produits
              </a>

              <a
                href="/nouveautes"
                className="inline-flex justify-center px-7 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-pink-500 hover:text-pink-500 transition"
              >
                Voir les nouveautés
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;