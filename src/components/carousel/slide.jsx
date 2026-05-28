import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Nouvelle collection",
    subtitle: "Habits, chaussures et accessoires tendance",
    description:
      "Découvrez des pièces modernes pour affirmer votre style au quotidien.",
    buttonText: "Découvrir",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Chaussures premium",
    subtitle: "Confort, style et élégance",
    description:
      "Des modèles sélectionnés pour compléter toutes vos tenues.",
    buttonText: "Voir les chaussures",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Montres & bijoux",
    subtitle: "Les détails qui font la différence",
    description:
      "Ajoutez une touche chic à votre look avec nos accessoires.",
    buttonText: "Voir les accessoires",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Mode urbaine",
    subtitle: "Pour homme et femme",
    description:
      "Des vêtements stylés, simples à porter et adaptés à toutes les saisons.",
    buttonText: "Acheter maintenant",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
  },
];

const Slide = () => {
  return (
    <section className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[430px] md:h-[560px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl text-white">
                    <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-medium mb-5 backdrop-blur-md">
                      {slide.subtitle}
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                      {slide.title}
                    </h1>

                    <p className="text-base sm:text-lg text-white/85 leading-7 mb-8 max-w-xl">
                      {slide.description}
                    </p>

                    <button className="px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;