import React from 'react';
import AboutMeSection from './components/AboutMeSection';
import Header from './components/Header';
import LandingSection from './components/LandingSection';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <Header />
      <LandingSection />
      <AboutMeSection />
      <GlobalStyles />
    </>
  );
};

export default App;
