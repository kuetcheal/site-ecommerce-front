import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home.jsx";
import Footer from "./components/layout/footer.jsx";
import Navbar from "./components/layout/navbar.jsx";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;