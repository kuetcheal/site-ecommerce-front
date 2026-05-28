import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

const footerSections = [
  {
    title: "VÊTEMENTS",
    links: [
      { label: "Homme", to: "/categories/homme" },
      { label: "Femme", to: "/categories/femme" },
      { label: "Nouveautés", to: "/nouveautes" },
      { label: "Promotions", to: "/promotions" },
      { label: "Collections", to: "/collections" },
    ],
  },
  {
    title: "CHAUSSURES",
    links: [
      { label: "Sneakers", to: "/categories/chaussures" },
      { label: "Chaussures homme", to: "/categories/chaussures-homme" },
      { label: "Chaussures femme", to: "/categories/chaussures-femme" },
      { label: "Sport", to: "/categories/sport" },
      { label: "Élégantes", to: "/categories/elegantes" },
    ],
  },
  {
    title: "ACCESSOIRES",
    links: [
      { label: "Montres", to: "/categories/montres" },
      { label: "Bijoux", to: "/categories/bijoux" },
      { label: "Sacs", to: "/categories/sacs" },
      { label: "Lunettes", to: "/categories/lunettes" },
      { label: "Casquettes", to: "/categories/casquettes" },
    ],
  },
  {
    title: "INFOS",
    links: [
      { label: "Contactez-nous", to: "/contact" },
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "Politique de confidentialité", to: "/confidentialite" },
      { label: "Conditions de livraison", to: "/livraison" },
      { label: "Retours & remboursements", to: "/retours" },
    ],
  },
  {
    title: "MON COMPTE",
    links: [
      { label: "Connexion", to: "/connexion" },
      { label: "Inscription", to: "/inscription" },
      { label: "Mes commandes", to: "/mes-commandes" },
      { label: "Mes favoris", to: "/favoris" },
      { label: "Mes adresses", to: "/mes-adresses" },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(4,10,24,0.92), rgba(4,10,24,0.94)), url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* léger motif / overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        {/* version desktop */}
        <div className="hidden xl:grid xl:grid-cols-[1fr_1fr_1fr_1.2fr_1fr_1fr] gap-10 items-start">
          {/* Colonne 1 */}
          <div>
            <h3 className="text-xl font-semibold  tracking-wide mb-5">
              {footerSections[0].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[0].links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/75 hover:text-pink-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="text-xl font-semibold  tracking-wide mb-5">
              {footerSections[1].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[1].links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/75 hover:text-pink-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="text-xl font-semibold  tracking-wide mb-5">
              {footerSections[2].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[2].links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/75 hover:text-pink-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc central logo */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-3xl font-extrabold shadow-xl mb-5">
              S
            </div>

            <h2 className="text-5xl font-bold tracking-tight">
              StyleShop
            </h2>

            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/70">
              Mode & accessoires
            </p>

            <p className="mt-5 text-white/70 leading-7 max-w-xs">
              Votre boutique en ligne dédiée aux vêtements, chaussures,
              montres, bijoux et accessoires tendance.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-pink-400 hover:border-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-pink-400 hover:border-pink-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-pink-400 hover:border-pink-400 transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Colonne 5 */}
          <div>
            <h3 className="text-xl font-semibold  tracking-wide mb-5">
              {footerSections[3].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[3].links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/75 hover:text-pink-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 6 */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide mb-5">
              {footerSections[4].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[4].links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white/75 hover:text-pink-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* version tablette/mobile */}
        <div className="xl:hidden">
          {/* logo */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-2xl font-extrabold shadow-xl mb-4">
              S
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">StyleShop</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/70">
              Mode & accessoires
            </p>

            <p className="mt-4 text-white/70 leading-7 max-w-md">
              Découvrez une sélection tendance de vêtements, chaussures,
              montres, bijoux et accessoires pour homme et femme.
            </p>
          </div>

          {/* colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-extrabold uppercase tracking-wide mb-4">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        className="text-white/75 hover:text-pink-400 transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* réseaux */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-pink-400 hover:border-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-pink-400 hover:border-pink-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-pink-400 hover:border-pink-400 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* barre du bas */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/75 text-center lg:text-left">
            © 2026 StyleShop - Tous droits réservés - 271 Rue de la Thériaque, 34090 Montpellier
          </p>

          <div className="flex items-center gap-5 text-white text-4xl">
            <FaCcAmex className="opacity-90 hover:opacity-100 transition" />
            <FaCcVisa className="opacity-90 hover:opacity-100 transition" />
            <FaCcMastercard className="opacity-90 hover:opacity-100 transition" />
            <FaCcPaypal className="opacity-90 hover:opacity-100 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;