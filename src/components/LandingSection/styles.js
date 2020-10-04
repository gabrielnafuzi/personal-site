import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: calc(100vh - 82px);

  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.8rem;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;

  h1 {
    font-size: 1.9rem;
    font-weight: 600;
    line-height: 3.75rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }

  a {
    margin-top: 2.6rem;
    background: var(--color-white);
    border: 1px solid var(--color-purple);

    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-purple);
    border-radius: 2.5px;
    max-width: max-content;
    padding: 0.625rem 1.25rem;

    transition: all 0.4s ease;

    &:hover,
    &:focus {
      transform: translateY(-6px);
    }
  }

  @media (min-width: 979px) {
    max-width: 55%;
    margin-right: 1rem;

    h1 {
      font-size: 2.4rem;
    }

    p {
      font-size: 1.1rem;
    }

    a {
      font-size: 1rem;
    }
  }
`;

export const HelloText = styled.h3`
  font-size: 1.35rem;
  font-weight: 300;
  margin-bottom: 0.2rem;

  @media (min-width: 979px) {
    font-size: 1.4rem;
  }
`;

export const HeroImageBlock = styled.div`
  display: none;

  @media (min-width: 979px) {
    display: block;
    width: 45%;
    margin-top: 3.4rem;
    margin-bottom: 0.4rem;

    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
