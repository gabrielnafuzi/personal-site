import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #fafafa;
    --color-black: #2e2e2e;
    --color-purple: #7d77e0;
    --color-white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--color-background);
    scroll-behavior: smooth;
  }

  body {
    padding-top: 82px;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Space Mono', monospace;
    color: var(--color-black);
    transition: color 0.2s ease-out;
  }

  ul {
    list-style: none;
  }

  .section-title {
    display: block;

    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;

    &::after {
      content: '';
      max-width: 152px;
      height: 14.5px;

      display: block;
      position: relative;
      bottom: 14px;
      background-color: var(--color-purple);
      z-index: -1;
      opacity: 0.5;
      margin: 0 auto;
    }
  }
  
`;
