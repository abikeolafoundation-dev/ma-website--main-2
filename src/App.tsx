/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PillarsPage from './pages/PillarsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import {Footer} from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-gold-light/30 selection:text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pillars" element={<PillarsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
