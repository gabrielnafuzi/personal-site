import React from 'react';

import { ReactComponent as HeroImage } from '../../assets/hero-img.svg';

import { Container, ContentBlock, HelloText, HeroImageBlock } from './styles';

const LandingSection = () => {
  return (
    <Container>
      <ContentBlock>
        <HelloText>
          Olá!{' '}
          <span role="img" aria-label="Mão abanando">
            👋
          </span>
        </HelloText>
        <h1>Eu sou o Gabriel.</h1>
        <p>
          Desenvolvedor Front-End apaixonado por React, estudo Análise e
          Desenvolvimento de sistemas e amo ajudar as pessoas{' '}
          <span role="img" aria-label="Rosto feliz">
            🙂
          </span>
        </p>

        <a href="#about">Sobre mim</a>
      </ContentBlock>

      <HeroImageBlock>
        <HeroImage />
      </HeroImageBlock>
    </Container>
  );
};

export default LandingSection;
