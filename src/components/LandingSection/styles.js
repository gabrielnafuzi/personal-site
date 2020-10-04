import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: calc(100vh - 82px);

  margin: 0 auto;
  max-width: 1200px;
  padding: 0 3.2rem;
`;

export const ContentBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 14rem;

  h1 {
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 7.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 300;
  }

  a {
    margin-top: 3.2rem;
    background: var(--color-white);
    border: 1px solid var(--color-purple);

    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-purple);
    border-radius: 2.5px;
    max-width: max-content;
    padding: 1.25rem 2.5rem;

    transition: all 0.4s ease;

    &:hover,
    &:focus {
      transform: translateY(-6px);
    }
  }

  @media (min-width: 97.9rem) {
    max-width: 55%;
    margin-right: 2rem;

    h1 {
      font-size: 4.8rem;
    }

    p {
      font-size: 2.2rem;
    }

    a {
      font-size: 2rem;
    }
  }
`;

export const HelloText = styled.h3`
  font-size: 2.7rem;
  font-weight: 300;
  margin-bottom: 0.4rem;

  @media (min-width: 97.9rem) {
    font-size: 2.8rem;
  }
`;

export const HeroImageBlock = styled.div`
  display: none;

  @media (min-width: 97.9rem) {
    display: block;
    width: 45%;
    margin-top: 6.8rem;
    margin-bottom: 0.8rem;

    svg {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
