import React from 'react';

import { Container, ContentBlock, ImageBlock } from './styles';

const ProjectCard = ({ title, description, imgSrc, projectUrl, repositoryUrl }) => {
  return (
    <Container>
      <ContentBlock>
        <h1>{title}</h1>

        <p>{description}</p>

        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          Ao vivo{' '}
          <div className="arrow-block">
            <span> → </span>
          </div>
        </a>

        <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
          Repositório{' '}
          <div className="arrow-block">
            <span> → </span>
          </div>
        </a>
      </ContentBlock>

      <ImageBlock>
        <img src={imgSrc} alt={title} />
      </ImageBlock>
    </Container>
  );
};

export default ProjectCard;
