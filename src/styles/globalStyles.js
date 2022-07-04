import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 body {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  color: #000;
 }
 a {
   text-decoration: none;
   color: #000;
 }
 button {
   padding: 0;
   background: none;
   cursor: pointer;
 }
 strong {
   font-weight: bold;
 }
`;

export default GlobalStyles;
