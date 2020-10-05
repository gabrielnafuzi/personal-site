import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 5px 5px -1px rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderBlock = styled.header`
  margin: 0 auto;
  padding: 1.6rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
`;

export const Logo = styled.div`
  font-size: 2.8rem;
  color: var(--color-purple);
`;

export const Nav = styled.ul`
  display: flex;

  li {
    font-size: 2rem;
    padding: 0 0.8rem;
    margin: 0 1.2rem;

    a {
      text-decoration: none;
    }
  }

  &.nav-mobile {
    display: block;
    position: absolute;
    top: 62px;
    right: 20px;
    padding: 0 2rem;

    background: var(--color-white);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    border: 1px solid var(--color-purple);
    border-radius: 0.4rem;

    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    li {
      padding: 1.6rem 0;

      & + li {
        border-top: 1px solid var(--color-purple);
      }
    }
  }

  &.nav-mobile-active {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }
`;

export const MobileButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 2.8rem;
    height: 3px;
    border-radius: 4px;
    background: var(--color-purple);
    box-shadow: 0 7px var(--color-purple), 0 -7px var(--color-purple);
    transition: 0.2s;
  }

  &.active::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px var(--color-purple), 0 -8px var(--color-purple);
  }
`;
