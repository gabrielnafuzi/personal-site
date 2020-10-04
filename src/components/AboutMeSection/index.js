import React from 'react';

import { Container, ContentBlock, SkillList, AvatarBlock } from './styles';

const AboutMeSection = () => {
  return (
    <Container id="about">
      <h1 className="section-title">Sobre mim</h1>

      <div className="wrapper">
        <ContentBlock>
          <p>
            Meu nome é Gabriel Moraes, tenho 18 anos, moro no Brasil,
            especificamente em Uberaba-MG. Atualmente faço faculdade de Análise e
            desenvolvimento de sistemas na IFTM e tenho estudado, para futuramente,
            torna-me um desenvolvedor fullstack. Também tenho estudado bastante para
            aprender novas tecnologias, como TypeScript, ReactJS, NodeJs, etc.
          </p>

          <p>
            Iniciei meus estudos como Desenvolvedor Front End em Abril de 2020.
            Desde então venho dedicando algumas horas por dia aos estudos. Vejo que
            estou no caminho certo pois amo ajudar as pessoas que estão iniciando,
            assim com eu já fui iniciante. Além do mais, vejo os resultados que as
            horas dedicadas trazem.
          </p>

          <p>Atualmente trabalho com as seguintes tecnologias/linguagens:</p>

          <SkillList>
            <li>
              <span>JavaScript (ES6+)</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>ReactJS</span>
            </li>
            <li>
              <span>Styled-components</span>
            </li>
          </SkillList>
        </ContentBlock>

        <AvatarBlock>
          <img
            src="https://avatars2.githubusercontent.com/u/58908279?v=4"
            alt="Gabriel Moraes"
          />
        </AvatarBlock>
      </div>
    </Container>
  );
};

export default AboutMeSection;
