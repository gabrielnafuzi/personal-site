import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10rem 3.2rem 0;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      text-align: center;
      font-size: 3rem;
      color: var(--color-purple);
      margin-bottom: 4rem;
      border-bottom: 2px solid currentColor;
    }
  }
`;

export const IconsList = styled.ul`
  display: flex;
  width: 320px;
  justify-content: space-between;

  li {
    transition: 0.3s ease;

    a {
      padding: 1.4rem;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      transform: translateY(-6px);
    }
  }
`;
