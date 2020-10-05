import React from 'react';

import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <p>&copy; {new Date().getFullYear()} - Gabriel Moraes</p>
    </Container>
  );
};

export default Footer;
