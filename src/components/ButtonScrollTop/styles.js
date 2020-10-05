import styled from 'styled-components';

export const ButtonScrollToTop = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 22px;
  height: 22px;
  padding: 2rem;
  position: fixed;
  right: 26px;

  border-radius: 50%;
  background: var(--color-purple);
  transition: all 0.4s ease;
`;

export const ArrowUp = styled.span`
  border: solid var(--color-white);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
`;
