import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10rem 3.2rem 0;

  .wrapper {
    display: flex;
  }
`;

export const ContentBlock = styled.div`
  p {
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 97.9rem) {
    width: 50%;
  }
`;

export const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;

  li {
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      width: 7.5px;
      height: 7.5px;
      margin-right: 1.2rem;
      border-radius: 50%;
      background-color: var(--color-purple);
    }

    span {
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
`;

export const AvatarBlock = styled.div`
  display: none;

  @media (min-width: 97.9rem) {
    display: flex;
    align-items: center;
    margin-left: 8rem;

    img {
      display: block;
      max-width: 100%;
      border-radius: 0.4rem;
      filter: grayscale(100%);
      box-shadow: 22px 22px 0px 0px var(--color-purple);
      transition: 0.4s ease;

      &:hover {
        cursor: pointer;
        filter: grayscale(0%);
        border-radius: 0.8rem;

        transform: translate(4px, 4px);

        box-shadow: 6px 6px 0px 0px var(--color-purple);
      }
    }
  }
`;
