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
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Space Mono', monospace;
    color: var(--black);
    transition: color 0.2s ease-out;
  }

  ul {
    list-style: none;
  }
  
`;
