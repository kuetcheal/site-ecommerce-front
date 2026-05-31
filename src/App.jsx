import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CartProvider } from "./context/CartContext.jsx";

import Home from "./pages/home.jsx";
import Produit from "./pages/produit.jsx";
import ProductDetail from "./pages/productDetail.jsx";
import Panier from "./pages/panier.jsx";
import Contact from "./pages/contact.jsx";
import Nouveautes from "./pages/nouveautes.jsx";
import Promotions from "./pages/promotions.jsx";

import Connexion from "./pages/auth/connexion.jsx";
import Inscription from "./pages/auth/inscription.jsx";
import ForgetPassword from "./pages/auth/forgetPassword.jsx";

import Error404 from "./pages/error404.jsx";

import Footer from "./components/layout/footer.jsx";
import Navbar from "./components/layout/navbar.jsx";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />

          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
              
              <Route path="/produits" element={<Produit />} />
              <Route path="/produits/:id" element={<ProductDetail />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nouveautes" element={<Nouveautes />} />
              <Route path="/promotions" element={<Promotions />} />

              <Route path="/connexion" element={<Connexion />} />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/mot-de-passe-oublie" element={<ForgetPassword />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;