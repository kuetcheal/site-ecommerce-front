import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home.jsx";
import Produit from "./pages/produit.jsx";
import Footer from "./components/layout/footer.jsx";
import Navbar from "./components/layout/navbar.jsx";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Produit />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;