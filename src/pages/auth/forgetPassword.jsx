import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { AuthApi } from "../../api/AuthApi";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setLoading(true);

    try {
      await AuthApi.forgotPassword(email);

      setStatus({
        type: "success",
        message:
          "Si un compte existe avec cet e-mail, un lien de réinitialisation sera envoyé.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "La fonctionnalité de mot de passe oublié doit encore être ajoutée côté backend Spring Boot.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 px-6 sm:px-10 md:px-16 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-gray-900">
            Mot de passe oublié ?
          </h1>

          <p className="mt-5 text-gray-600 leading-7">
            Entrez votre adresse e-mail. Si elle correspond à un compte existant,
            vous recevrez un lien pour réinitialiser votre mot de passe.
          </p>

          {status.message && (
            <div
              className={`mt-8 rounded-xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-green-50 border-green-100 text-green-700"
                  : "bg-red-50 border-red-100 text-red-600"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="relative max-w-md mx-auto">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 border border-gray-200 bg-white pl-11 pr-4 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                placeholder="votre@email.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-7 w-full max-w-md h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 disabled:opacity-60 transition"
            >
              {loading ? "Envoi..." : "Recevoir le lien"}
            </button>
          </form>

          <p className="mt-8 text-sm text-gray-600">
            Vous vous souvenez du mot de passe ?{" "}
            <Link to="/connexion" className="font-semibold text-pink-500 hover:text-pink-600">
              Retour à la connexion
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;