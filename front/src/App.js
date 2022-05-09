import Home from "./containers/Home";
import { Route, Routes } from "react-router-dom";

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import AnnoncesByCategory from "./containers/AnnoncesByCategory";
import Annonce from "./containers/Annonce";
import AnnonceForm from "./components/AnnonceForm";
import Admin from "./containers/Admin";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/annonces/:category" element={<AnnoncesByCategory />} />
        <Route path="/annonce/:id" element={<Annonce />} />
        <Route path="/nouvelle-annonce" element={<AnnonceForm />} />
        <Route path="/modifier-annonce/:id" element={<AnnonceForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
