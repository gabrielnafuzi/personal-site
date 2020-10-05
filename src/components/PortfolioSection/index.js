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
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi vel alias quaerat voluptatem sint, harum voluptatum, qui ipsum beatae perferendis quas expedita ullam repudiandae, vitae ducimus minus accusantium omnis."
          imgSrc="https://i.imgur.com/uRPL0Yy.png"
          projectUrl="https://gngithubjobs.vercel.app/"
        />

        <ProjectCard
          title="Quiz"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi vel alias quaerat voluptatem sint, harum voluptatum, qui ipsum beatae perferendis quas expedita ullam repudiandae, vitae ducimus minus accusantium omnis."
          imgSrc="https://i.imgur.com/aG9OoeU.png"
          projectUrl="https://gnquiz.vercel.app/"
        />

        <ProjectCard
          title="Dogs"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi vel alias quaerat voluptatem sint, harum voluptatum, qui ipsum beatae perferendis quas expedita ullam repudiandae, vitae ducimus minus accusantium omnis."
          imgSrc="https://i.imgur.com/QUiVUGa.png"
          projectUrl="https://gndogs.vercel.app/"
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
