import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCallBar from './components/MobileCallBar';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Admin from './pages/Admin';
import LocalPage from './pages/LocalPage';
import ServiceSaturateur from './pages/ServiceSaturateur';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/nettoyage-terrasse-bois-bordeaux" element={<LocalPage slug="bordeaux" />} />
            <Route path="/nettoyage-terrasse-bois-arcachon" element={<LocalPage slug="arcachon" />} />
            <Route path="/nettoyage-terrasse-bois-cap-ferret" element={<LocalPage slug="cap-ferret" />} />
            <Route path="/application-saturateur-terrasse-bois" element={<ServiceSaturateur />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
