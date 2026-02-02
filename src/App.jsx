import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Thesis from "./pages/Thesis";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <CustomCursor />
        <ScrollToTop />
        <div className="bg-black text-white font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thesis" element={<Thesis />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
