import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2.5px 15px;
  margin-bottom: 4rem;
  transition: 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: none;
    cursor: pointer;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-purple);
  padding: 2.6rem;
  border-radius: 0.6rem;

  > * {
    color: var(--color-white);
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    max-width: max-content;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;

    text-decoration: none;

    .arrow-block span {
      margin-left: 0.8rem;
      text-align: center;
      font-size: 2.8rem;
      color: var(--color-white);
    }

    &:hover {
      .arrow-block {
        animation: goToRight 1s infinite linear;
      }
    }

    @keyframes goToRight {
      0%,
      100% {
        transform: translateX(0);
      }

      50% {
        transform: translateX(10px);
      }
    }
  }

  @media (min-width: 51.5rem) {
    width: 50%;
    background: var(--color-white);
    justify-content: center;

    > *,
    a .arrow-block span {
      color: var(--color-black);
    }

    a:hover {
      color: var(--color-purple);

      .arrow-block span {
        color: var(--color-purple);
      }
    }
  }
`;

export const ImageBlock = styled.div`
  display: none;
  background: var(--color-white);

  @media (min-width: 51.5rem) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    border-radius: 0.6rem;
    padding: 0.4rem;

    img {
      height: 300px;
      border-radius: 0.4rem;
      display: block;
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
      margin-left: auto;
    }
  }
`;
