import React from 'react';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import PortfolioSection from './components/PortfolioSection';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <Header />
      <LandingSection />
      <AboutMeSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
