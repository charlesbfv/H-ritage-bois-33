import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCallBar from './components/MobileCallBar';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

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
          </Routes>
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
