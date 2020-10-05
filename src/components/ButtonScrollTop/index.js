import React from 'react';

import { ButtonScrollToTop, ArrowUp } from './styles';

const ButtonScrollTop = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const windowScrolled = () => {
      window.pageYOffset > 300 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', windowScrolled);
    return () => window.removeEventListener('scroll', windowScrolled);
  }, []);

  return (
    <ButtonScrollToTop
      href="#"
      style={{
        bottom: scrolled ? '26px' : '-26px',
        opacity: scrolled ? '1' : '0',
      }}
    >
      <ArrowUp />
    </ButtonScrollToTop>
  );
};

export default ButtonScrollTop;