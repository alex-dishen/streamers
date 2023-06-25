import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  html {
    font-family: Manrope, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    background-color: rgb(243, 241, 236);
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  p,
  h1,
  ul {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
