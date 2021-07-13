import styled, { createGlobalStyle } from 'styled-components';

export const GlobalMain = createGlobalStyle`

  // Global Styles
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Font Styles
  @font-face {
    font-family: 'Lato Bold';
    src: url('/fonts/Lato-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato Regular';
    src: url('/fonts/Lato-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  // Main Styles
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    margin: 0;
    font-family: 'Lato Regular', sans-serif;
    line-height: 1.5;
    text-align: left;
  }
  code {
    font-family: 'Lato Regular', sans-serif !important;
    font-size: 14px !important;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    transition: 0.2s ease-in all;
  }
  a:hover {
    color: #2db594;
    text-decoration: none;
  }
  .linenumber {
    width: 2.5em !important;
    min-width: 2.5em !important;
    font-size: 13px;
  }
`;

export const Global = createGlobalStyle`

  // Main Styles
  body {
    background-color: ${(props) => props.theme.backgroundInformation};
    transition: 0.2s ease-in all;
  }
  hr {
    margin: 25px 0px 20px;
    border: 0px;
    border-bottom: 2px solid ${(props) => props.theme.borderInformation};
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-size: 16px !important;
    border-bottom: 1px solid ${(props) => props.theme.borderInformation};
    padding-bottom: 12px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    transition: 0.2s ease-in all;
  }
  h4 {
    font-size: 16px !important;
    margin-top: 0px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    transition: 0.2s ease-in all;
  }
  h5 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h6 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const Body1 = styled.div`
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Body2 = styled.div`
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header1 = styled.div`
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

export const Header2 = styled.div`
  font-family: 'Lato Bold', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const Header3 = styled.div`
  font-family: 'Lato Regular', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;
