import { createGlobalStyle } from 'styled-components';
import YellowCandy from '../font/YellowCandy.ttf'
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'YellowCandy';
    src: url(${YellowCandy}) format('truetype');
  }
`;
export default GlobalStyles;