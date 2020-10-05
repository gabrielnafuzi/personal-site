import React from 'react';
import useMedia from '../../Hooks/useMedia';

import { Container, HeaderBlock, Logo, Nav, MobileButton } from './styles';

const Header = () => {
  const mobile = useMedia('(max-width: 50rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <Container>
      <HeaderBlock>
        <Logo>Gabriel</Logo>

        {mobile && (
          <MobileButton
            className={mobileMenu && 'active'}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></MobileButton>
        )}

        <Nav
          className={`${mobile ? 'nav-mobile' : 'nav'} ${
            mobileMenu && 'nav-mobile-active'
          }`}
        >
          <li onClick={() => setMobileMenu(false)}>
            <a href="#about">Sobre mim</a>
          </li>
          <li onClick={() => setMobileMenu(false)}>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li onClick={() => setMobileMenu(false)}>
            <a href="#contact">Contato</a>
          </li>
        </Nav>
      </HeaderBlock>
    </Container>
  );
};

export default Header;
