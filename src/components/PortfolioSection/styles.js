import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10rem 3.2rem 0;

  .wrapper {
    display: flex;
    flex-direction: column;

    > a {
      font-size: 1.8rem;
      font-weight: 400;
      text-decoration: none;
      text-align: center;

      color: var(--color-purple);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
