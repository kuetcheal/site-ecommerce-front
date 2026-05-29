import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";
import { AuthApi } from "../../api/AuthApi";

const Inscription = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    motDePasse: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.motDePasse !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    try {
      await AuthApi.register({
        nom: form.nom,
        prenom: form.prenom,
        email: form.email,
        tel: form.tel,
        motDePasse: form.motDePasse,
      });

      navigate("/");
    } catch (err) {
      setError(err.message || "Impossible de créer le compte.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    alert("Inscription Google à configurer plus tard avec Spring Security OAuth2.");
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 px-6 sm:px-10 md:px-16 py-12">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-gray-900">
              Créer mon compte StyleShop
            </h1>

            <p className="mt-4 text-gray-600">
              Inscrivez-vous pour commander, suivre vos achats et gérer vos favoris.
            </p>
          </div>

          {error && (
            <div className="mt-8 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Nom
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Prénom
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                E-mail
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
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
                  required
                  className="w-full h-12 border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                  placeholder="07 58 10 31 17"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Mot de passe
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="motDePasse"
                  value={form.motDePasse}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full h-12 border border-gray-200 bg-white pl-11 pr-14 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                  placeholder="Minimum 8 caractères"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Confirmer le mot de passe
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="w-full h-12 border border-gray-200 bg-white pl-11 pr-14 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                  placeholder="Répéter le mot de passe"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-500"
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-[330px] h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 disabled:opacity-60 transition"
              >
                {loading ? "Création..." : "Créer mon compte"}
              </button>
            </div>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm uppercase text-gray-400">
              ou inscription avec
            </span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <button
            type="button"
            onClick={handleGoogleRegister}
            className="mx-auto flex w-full md:w-[330px] h-12 items-center justify-center gap-3 border border-gray-200 bg-white text-gray-800 font-semibold hover:border-pink-400 hover:text-pink-500 transition"
          >
            <FcGoogle className="text-2xl" />
            Continuer avec Google
          </button>

          <p className="mt-8 text-center text-sm text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link to="/connexion" className="font-semibold text-pink-500 hover:text-pink-600">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inscription;