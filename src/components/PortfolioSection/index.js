import React from 'react';

import ProjectCard from '../ProjectCard';
import { Container } from './styles';

const PortfolioSection = () => {
  return (
    <Container id="portfolio">
      <h1 className="section-title">Portfólio</h1>
      <div className="wrapper">
        <ProjectCard
          title="GitHub Jobs"
          description="Este projeto consiste em consumir a API do GitHub Jobs. Você seleciona ou escolhe a localização e escolhe a descrição da vaga e aparece todas as vagas disponíveis de acordo com o que foi pesquisado."
          imgSrc="https://i.imgur.com/uRPL0Yy.png"
          projectUrl="https://gngithubjobs.vercel.app/"
          repositoryUrl="https://github.com/gabrielnafuzi/github-jobs"
        />

        <ProjectCard
          title="Quiz"
          description="Este foi meu primeiro projeto feito em ReactJS, consiste em consumir a API do Open Trivia DB. Nele você escolhe o tema do quiz e a dificuldade das perguntas e após iniciar 10 perguntas são geradas para ser respondidas e ao final mostra a quantidade de acertos."
          imgSrc="https://i.imgur.com/aG9OoeU.png"
          projectUrl="https://gnquiz.vercel.app/"
          repositoryUrl="https://github.com/gabrielnafuzi/react-quiz-app"
        />

        <ProjectCard
          title="Dogs"
          description="Este foi um projeto feito durante o curso de ReactJS da Origamid, Neste projeto temos uma rede social para cachorros, com sistema de login, postagem, comentários, likes, etc."
          imgSrc="https://i.imgur.com/QUiVUGa.png"
          projectUrl="https://gndogs.vercel.app/"
          repositoryUrl="https://github.com/gabrielnafuzi/dogs"
        />

        <a
          href="https://github.com/gabrielnafuzi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositórios no GitHub
        </a>
      </div>
    </Container>
  );
};

export default PortfolioSection;
