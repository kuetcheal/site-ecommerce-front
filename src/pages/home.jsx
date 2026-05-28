import Slide from "../components/carousel/slide.jsx";
import AllCategories from "../components/carousel/allCategories.jsx";
import Description from "../components/carousel/description.jsx";
import ProductCarousel from "../components/products/ProductCarousel.jsx";
import TestimonialsCarousel from "../components/carousel/TestimonialsCarousel.jsx";
import { newCollections, popularProducts, accessoriesProducts } from "../data/productsData.js";

const Home = () => {
    const handleFavorite = (product) => {
    // Plus tard ici : dispatch(addToFavorites(product)) avec Redux.
    console.log("Favori :", product);
  };
   return (
    <>
      <Slide />

      <AllCategories />

      <Description />

      <ProductCarousel
        title="Nouvelles collections"
        subtitle="Découvrez les dernières pièces ajoutées à notre boutique."
        products={newCollections}
        viewAllLink="/nouveautes"
        carouselId="new-collections"
        onFavorite={handleFavorite}
      />

      <ProductCarousel
        title="Produits populaires"
        subtitle="Les articles les plus appréciés par nos clients."
        products={popularProducts}
        viewAllLink="/produits-populaires"
        carouselId="popular-products"
        onFavorite={handleFavorite}
      />

      <TestimonialsCarousel />

      <ProductCarousel
        title="Accessoires"
        subtitle="Montres, bijoux, lunettes, sacs et accessoires pour compléter votre style."
        products={accessoriesProducts}
        viewAllLink="/accessoires"
        carouselId="accessories-products"
        onFavorite={handleFavorite}
      />
    </>
  );
};

export default Home;