import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageSquare,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import { ContactApi } from "../api/ContactApi";

const initialForm = {
  nom: "",
  prenom: "",
  email: "",
  tel: "",
  typeDemande: "Question générale",
  sujet: "",
  numeroCommande: "",
  message: "",
  accepteContact: false,
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!form.accepteContact) {
      setStatus({
        type: "error",
        message:
          "Veuillez accepter d’être recontacté afin que nous puissions traiter votre demande.",
      });
      return;
    }

    setLoading(true);

    try {
      await ContactApi.sendMessage(form);

      setStatus({
        type: "success",
        message:
          "Votre message a bien été envoyé. Notre équipe vous répondra rapidement.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "Le service de contact n’est pas encore disponible côté backend. Le formulaire est prêt côté React.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-white">
      {/* Header */}
      <section
        className="relative w-full py-20 md:py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,10,25,0.76), rgba(5,10,25,0.82)), url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-semibold backdrop-blur-md">
            Service client StyleShop
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Contactez-nous
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-base md:text-lg leading-8">
            Une question sur un produit, une commande, une livraison ou un
            retour ? Notre équipe est là pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-14">
            {/* Infos contact */}
            <aside className="space-y-6">
              <div className="bg-gray-50 rounded-3xl p-7">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Besoin d’aide ?
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  Pour une meilleure prise en charge, indiquez votre numéro de
                  commande si votre demande concerne un achat déjà effectué.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                    <FiMail className="text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600 text-sm">
                      contact@styleshop.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                    <FiPhone className="text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Téléphone</h3>
                    <p className="mt-1 text-gray-600 text-sm">
                      01 23 45 67 89
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Adresse</h3>
                    <p className="mt-1 text-gray-600 text-sm">
                      12 rue des exemples, Paris
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                    <FiClock className="text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">Horaires</h3>
                    <p className="mt-1 text-gray-600 text-sm">
                      Lun - Sam : 9h00 - 19h00
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Formulaire */}
            <section className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold text-pink-500 uppercase tracking-[0.2em]">
                  Formulaire
                </p>

                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900">
                  Envoyez-nous un message
                </h2>

                <p className="mt-3 text-gray-600">
                  Remplissez le formulaire ci-dessous, nous reviendrons vers vous
                  dans les meilleurs délais.
                </p>
              </div>

              {status.message && (
                <div
                  className={`mb-6 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 border-green-100 text-green-700"
                      : "bg-red-50 border-red-100 text-red-600"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Nom *
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Prénom *
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Email *
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Téléphone
                    </label>

                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="tel"
                        value={form.tel}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                        placeholder="07 58 10 31 17"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Type de demande *
                    </label>

                    <select
                      name="typeDemande"
                      value={form.typeDemande}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                    >
                      <option>Question générale</option>
                      <option>Information produit</option>
                      <option>Commande</option>
                      <option>Paiement</option>
                      <option>Livraison</option>
                      <option>Retour ou remboursement</option>
                      <option>Partenariat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Numéro de commande
                    </label>

                    <div className="relative">
                      <FiShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="numeroCommande"
                        value={form.numeroCommande}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                        placeholder="Ex : CMD-2026-001"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Sujet *
                  </label>

                  <input
                    type="text"
                    name="sujet"
                    value={form.sujet}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-xl border border-gray-200 bg-white px-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Message *
                  </label>

                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 outline-none resize-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                      placeholder="Expliquez votre demande..."
                    />
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="accepteContact"
                    checked={form.accepteContact}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-pink-500"
                  />

                  <span>
                    J’accepte que StyleShop me contacte par email ou téléphone
                    afin de répondre à ma demande.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 disabled:opacity-60 transition"
                >
                  <FiSend />
                  {loading ? "Envoi..." : "Envoyer le message"}
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;