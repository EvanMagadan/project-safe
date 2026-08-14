import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { BackToTop } from "./components/BackToTop";
import { Home } from "./pages/Home";
import { AboutSTDs } from "./pages/AboutSTDs";
import { Statistics } from "./pages/Statistics";
import { TypesOfSTDs } from "./pages/TypesOfSTDs";
import { Prevention } from "./pages/Prevention";
import { TestingCenters } from "./pages/TestingCenters";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-stds" element={<AboutSTDs />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/types" element={<TypesOfSTDs />} />
            <Route path="/prevention" element={<Prevention />} />
            <Route path="/testing-centers" element={<TestingCenters />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}