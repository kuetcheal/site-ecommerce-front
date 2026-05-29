import { Link, useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";

import { useCart } from "../context/CartContext.jsx";
import { getToken } from "../api/http.js";
import { CommandeApi } from "../api/CommandeApi.js";

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

const Panier = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const handleCheckout = async () => {
    const token = getToken();

    if (!token) {
      navigate("/connexion", {
        state: {
          redirectTo: "/panier",
        },
      });
      return;
    }

    try {
      const items = cartItems.map((item) => ({
        produitId: item.id,
        quantite: item.quantity,
      }));

      const response = await CommandeApi.payer(items);

      if (response?.checkoutUrl) {
        window.location.href = response.checkoutUrl;
      }
    } catch (error) {
      console.error(error);
      alert(
        "Impossible de créer la commande. Vérifie que les produits existent bien dans ta base de données."
      );
    }
  };

  if (cartItems.length === 0) {
    return (
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
            <FiShoppingBag className="text-4xl" />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Votre panier est vide
          </h1>

          <p className="mt-3 text-gray-500">
            Ajoutez des produits au panier avant de passer commande.
          </p>

          <Link
            to="/produits"
            className="mt-8 inline-flex px-7 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-pink-500 transition"
          >
            Voir les produits
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Mon panier
        </h1>

        <p className="mt-2 text-gray-500">
          Vérifiez vos articles avant de passer à la commande.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Liste produits */}
          <div className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col sm:flex-row gap-5 border border-gray-100 rounded-3xl p-4 shadow-sm"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full sm:w-36 h-40 object-cover rounded-2xl bg-gray-100"
                />

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Couleur : {item.color}
                      </p>

                      <p className="mt-3 text-lg font-extrabold text-pink-500">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition"
                    >
                      <FiTrash2 />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center hover:text-pink-500"
                      >
                        <FiMinus />
                      </button>

                      <span className="w-10 text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center hover:text-pink-500"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <p className="font-extrabold text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Résumé */}
          <aside className="h-fit rounded-3xl bg-gray-50 p-6 lg:sticky lg:top-28">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Résumé commande
            </h2>

            <div className="mt-6 space-y-4 border-b border-gray-200 pb-5">
              <div className="flex items-center justify-between text-gray-600">
                <span>Sous-total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>

              <div className="flex items-center justify-between text-gray-600">
                <span>Livraison</span>
                <span>Calculée plus tard</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-extrabold text-pink-500">
                {formatPrice(cartTotal)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-7 w-full h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase hover:opacity-90 transition"
            >
              Passer la commande
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="mt-4 w-full h-12 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-red-400 hover:text-red-500 transition"
            >
              Vider le panier
            </button>

            <p className="mt-5 text-sm text-gray-500 leading-6">
              Vous pourrez vous connecter ou créer un compte au moment de passer
              la commande.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Panier;