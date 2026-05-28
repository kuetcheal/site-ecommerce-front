import React from "react";
import { FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    // Pour l’instant, on bloque juste le rechargement de la page.
    // Plus tard, tu pourras connecter ce formulaire à ton backend Spring Boot.
    console.log("Inscription newsletter");
  };

  return (
    <footer className="relative z-50 mt-auto bg-gradient-to-r from-[#04152d] via-[#02142b] to-[#000f24] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          
          {/* Bloc 1 */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Suivez-nous</h2>

            <p className="text-sm text-white/70 mb-4 leading-6">
              Recevez nos nouveautés, nos offres et nos informations utiles directement par email.
            </p>

            <h3 className="text-sm font-semibold mb-3 text-white">
              Inscrivez-vous à notre newsletter
            </h3>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition"
              />

              <button
                type="submit"
                className="px-5 py-3 rounded-sm bg-gradient-to-r from-[#ff4f88] to-[#c43b7a] hover:opacity-90 text-white font-semibold transition whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>

            <p className="mt-5 text-sm text-white/70">
              Suivez-nous sur les réseaux :
            </p>

            <div className="flex items-center gap-4 mt-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-500/20 border border-white/10 flex items-center justify-center transition"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-500/20 border border-white/10 flex items-center justify-center transition"
              >
                <FaYoutube className="text-lg" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-500/20 border border-white/10 flex items-center justify-center transition"
              >
                <FaFacebookF className="text-lg" />
              </a>
            </div>
          </div>

          {/* Bloc 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Contact</h2>

            <ul className="space-y-3 text-white/80 text-sm leading-6">
              <li>
                <span className="font-semibold text-white">Téléphone :</span>{" "}
                01 23 45 67 89
              </li>

              <li>
                <span className="font-semibold text-white">Email :</span>{" "}
                contact@exemple.com
              </li>

              <li>
                <span className="font-semibold text-white">Adresse :</span>{" "}
                12 rue des exemples, Paris
              </li>

              <li>
                <span className="font-semibold text-white">Heures :</span>{" "}
                Lun - Dim, 24h/24
              </li>
            </ul>
          </div>

          {/* Bloc 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">STYLESHOP</h2>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-pink-300 transition">
                  Nos offres
                </a>
              </li>

              <li>
                <a href="#" className="text-white/80 hover:text-pink-300 transition">
                  Parrainage
                </a>
              </li>

              <li>
                <a href="#" className="text-white/80 hover:text-pink-300 transition">
                  Infos pratiques
                </a>
              </li>

              <li>
                <a href="#" className="text-white/80 hover:text-pink-300 transition">
                  Les plus moins chers
                </a>
              </li>

              <li>
                <a href="#" className="text-white/80 hover:text-pink-300 transition">
                  Nouveaux articles
                </a>
              </li>
            </ul>
          </div>

          {/* Bloc 4 */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">
              Informations légales
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/mentions-legales"
                  className="text-white/80 hover:text-pink-300 transition"
                >
                  Mentions légales
                </a>
              </li>

              <li>
                <a
                  href="/politique-confidentialite"
                  className="text-white/80 hover:text-pink-300 transition"
                >
                  Politique de confidentialité
                </a>
              </li>

              <li>
                <a
                  href="/cookies-consentement"
                  className="text-white/80 hover:text-pink-300 transition"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            © 2026 EasyTravel. Tous droits réservés.
          </p>

          <p className="text-sm text-white font-bold text-center md:text-right">
            Alex KUETCHE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;