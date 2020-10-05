import React from 'react';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ButtonScrollTop from './components/ButtonScrollTop';
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
      <ButtonScrollTop />
      <GlobalStyles />
    </>
  );
};

export default App;
