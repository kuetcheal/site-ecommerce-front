import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    title: "Vêtements homme",
    link: "/homme",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Vêtements femme",
    link: "/femme",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Chaussures",
    link: "/chaussures",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Montres",
    link: "/montres",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Accessoires",
    link: "/accessoires",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Promotions",
    link: "/promotions",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=900&q=80",
  },
];

const AllCategories = () => {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-900">
            Catégories
          </h2>

          <Link
            to="/produits"
            className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-pink-500 transition"
          >
            Afficher tous les produits
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={18}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".categories-prev",
              nextEl: ".categories-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="w-full"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={category.link}
                  className="group relative block h-[360px] md:h-[430px] overflow-hidden bg-gray-200"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-[0.18em] leading-tight drop-shadow-lg">
                      {category.title}
                    </h3>

                    <span className="mt-3 text-white text-sm font-medium uppercase underline underline-offset-4 tracking-wide">
                      Voir
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flèche gauche */}
          <button
            type="button"
            className="categories-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-pink-500 transition"
            aria-label="Catégorie précédente"
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Flèche droite */}
          <button
            type="button"
            className="categories-next absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-pink-500 transition"
            aria-label="Catégorie suivante"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllCategories;