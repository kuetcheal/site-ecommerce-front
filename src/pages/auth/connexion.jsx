import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { AuthApi } from "../../api/AuthApi";

const Connexion = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        motDePasse: "",
    });


    const location = useLocation();
    const redirectTo = location.state?.redirectTo || "/";


    const [showPassword, setShowPassword] = useState(false);
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
        setLoading(true);

        try {
            await AuthApi.login(form);
            navigate(redirectTo);
        } catch (err) {
            setError(err.message || "Email ou mot de passe incorrect.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        alert("Connexion Google à configurer plus tard avec Spring Security OAuth2.");
    };

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Bloc connexion */}
                    <div className="bg-gray-50 px-6 sm:px-10 md:px-16 py-12">
                        <h1 className="text-center text-2xl font-extrabold uppercase tracking-wide text-gray-900">
                            Déjà client ? Me connecter
                        </h1>

                        {error && (
                            <div className="mt-6 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] md:items-center gap-3">
                                <label className="text-gray-700 font-medium">E-mail</label>

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

                            <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] md:items-center gap-3">
                                <label className="text-gray-700 font-medium">Mot de passe</label>

                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="motDePasse"
                                        value={form.motDePasse}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-12 border border-gray-200 bg-white pl-11 pr-14 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition"
                                        placeholder="Votre mot de passe"
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

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full md:w-[300px] h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 disabled:opacity-60 transition"
                                >
                                    {loading ? "Connexion..." : "Se connecter"}
                                </button>
                            </div>
                        </form>

                        <div className="mt-7 text-center">
                            <Link
                                to="/mot-de-passe-oublie"
                                className="text-sm text-gray-700 hover:text-pink-500 transition"
                            >
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-300" />
                            <span className="text-sm uppercase text-gray-400">
                                ou connexion avec
                            </span>
                            <div className="h-px flex-1 bg-gray-300" />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="mx-auto flex w-full md:w-[330px] h-12 items-center justify-center gap-3 border border-gray-200 bg-white text-gray-800 font-semibold hover:border-pink-400 hover:text-pink-500 transition"
                        >
                            <FcGoogle className="text-2xl" />
                            Continuer avec Google
                        </button>
                    </div>

                    {/* Bloc inscription */}
                    <div className="bg-gray-50 px-6 sm:px-10 md:px-16 py-12 flex flex-col items-center justify-center text-center">
                        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900">
                            Nouveau client ?
                        </h2>

                        <p className="mt-7 text-gray-700 leading-7 max-w-md">
                            Créez votre compte sur{" "}
                            <span className="font-extrabold text-gray-900">StyleShop</span>{" "}
                            et profitez de nombreux avantages.
                        </p>

                        <p className="mt-4 text-gray-600 leading-7 max-w-md">
                            Paiement rapide, suivi de vos commandes, favoris, offres exclusives
                            et bien plus encore.
                        </p>

                        <Link
                            to="/inscription"
                            className="mt-10 inline-flex w-full md:w-[300px] h-12 items-center justify-center bg-gray-900 text-white font-bold uppercase hover:bg-pink-500 transition"
                        >
                            Devenir client
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connexion;