import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle(
  ({ theme }) => styled.css`
    html {
      font-family: Manrope, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
      background-color: ${theme.colors.black[900]};
      color: white;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 50px 20px;
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
  `,
);

export default GlobalStyle;
