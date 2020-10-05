import React from 'react';

import { ReactComponent as GithubIcon } from '../../assets/icons/github-icon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail-icon.svg';

import { Container, IconsList } from './styles';

const ContactSection = () => {
  return (
    <Container>
      <h1 className="section-title">Contato</h1>

      <div className="wrapper">
        <h2>Minhas redes</h2>

        <IconsList>
          <li>
            <a
              href="https://github.com/gabrielnafuzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabrielnfz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gabrielnfz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>

          <li>
            <a href="mailto:gabrielhm2001@gmail.com">
              <MailIcon />
            </a>
          </li>
        </IconsList>
      </div>
    </Container>
  );
};

export default ContactSection;
