import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Mélody Raza",
    date: "samedi 30 août 2025",
    rating: 5,
    comment:
      "Super expérience avec StyleShop ! Travail soigné, livraison rapide et produits impeccables. Je recommande !",
    avatarType: "initial",
    avatarValue: "M",
    avatarBg: "bg-indigo-500",
  },
  {
    id: 2,
    name: "Céline Lebrun",
    date: "mardi 26 août 2025",
    rating: 5,
    comment:
      "Au top ! Très bien. Les accessoires sont magnifiques et la qualité est vraiment au rendez-vous.",
    avatarType: "image",
    avatarValue:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Maé B",
    date: "vendredi 22 août 2025",
    rating: 5,
    comment:
      "Je suis ravie de ma commande. Les articles sont très beaux, bien emballés et conformes aux photos. Merci ✨",
    avatarType: "initial",
    avatarValue: "M",
    avatarBg: "bg-green-700",
  },
  {
    id: 4,
    name: "Alexandra P.",
    date: "jeudi 21 août 2025",
    rating: 5,
    comment:
      "Très belle découverte ! Le site est fluide, les produits sont tendance et le service client est réactif.",
    avatarType: "image",
    avatarValue:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    name: "Sonia K",
    date: "lundi 18 août 2025",
    rating: 5,
    comment:
      "J’ai commandé un sac et une montre : qualité au top, finitions très propres et livraison sans souci.",
    avatarType: "initial",
    avatarValue: "S",
    avatarBg: "bg-pink-500",
  },
  {
    id: 6,
    name: "Brice T.",
    date: "samedi 16 août 2025",
    rating: 5,
    comment:
      "Boutique sérieuse, produits conformes et très bon rapport qualité-prix. Je reviendrai pour d’autres achats.",
    avatarType: "initial",
    avatarValue: "B",
    avatarBg: "bg-slate-700",
  },
];

const Stars = ({ count = 5 }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: count }).map((_, index) => (
        <FaStar key={index} className="text-sm" />
      ))}
    </div>
  );
};

const Avatar = ({ testimonial }) => {
  if (testimonial.avatarType === "image") {
    return (
      <img
        src={testimonial.avatarValue}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
      />
    );
  }

  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow ${testimonial.avatarBg}`}
    >
      {testimonial.avatarValue}
    </div>
  );
};

const TestimonialsCarousel = () => {
  return (
    <section
      className="relative w-full py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(250,250,250,0.94), rgba(250,250,250,0.94)), url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <FcGoogle className="text-5xl" />

            <div>
              <p className="text-base font-semibold text-gray-800">Avis Google</p>
              <h2 className="text-2xl md:text-4xl font-extrabold  leading-tight">
                Les avis de nos clients
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <div className="text-right">
              <p className="text-sm md:text-base font-semibold text-pink-400">
                Note globale
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="text-4xl md:text-5xl font-extrabold text-pink-400 leading-none">
                5
              </span>
            </div>

            <p className="text-sm md:text-lg text-pink-400 font-medium whitespace-nowrap">
              26 avis
            </p>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={22}
          loop={true}
          autoplay={{
            delay: 4200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="w-full !pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <article className="h-[340px] md:h-[360px] rounded-md border border-gray-200 bg-white/85 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
                <div>
                  <RiDoubleQuotesL className="text-5xl text-amber-700/70 mb-4" />

                  <p className=" font-semibold text-lg leading-8">
                    {testimonial.comment}
                  </p>
                </div>

                <div className="flex items-end justify-between gap-4 mt-6">
                  <div>
                    <h3 className="text-pink-400 font-semibold text-lg">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {testimonial.date}
                    </p>

                    <div className="mt-3">
                      <Stars count={testimonial.rating} />
                    </div>
                  </div>

                  <Avatar testimonial={testimonial} />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;