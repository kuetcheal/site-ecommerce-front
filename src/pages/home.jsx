import Slide from "../components/carousel/slide.jsx";
import AllCategories from "../components/carousel/allCategories.jsx";
import Description from "../components/carousel/description.jsx";

const Home = () => {
  return (
    <>
      <Slide />
      <AllCategories />
       <Description />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Nos produits populaires
        </h2>

        <p className="mt-2 text-gray-600">
          Découvrez bientôt notre sélection de vêtements, chaussures, montres et accessoires.
        </p>
      </section>
    </>
  );
};

export default Home;