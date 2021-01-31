import { createGlobalStyle } from 'styled-components';

import { colors, sizes, fonts } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${colors.background};
    -webkit-font-smoothing: antialiased !important;
    padding: 1rem;
  }

  a {
    color: ${colors.link}
  }

  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    color: ${colors.text};
    font-size: ${sizes.normal};
    font-family: ${fonts};
  }

  small {
    font-size: ${sizes.small};
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: ${colors.champagne};
  }
`;
