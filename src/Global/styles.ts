import { createGlobalStyle } from 'styled-components';
import theme from './colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 *{
   margin:0;
   padding: 0;
   box-sizing: border-box;


  }
  body{
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap');
   font-family: 'Rajdhani', sans-serif;
   font-weight:400;
   font-size: 14px;
   color: ${theme.colors.texts};
 }
td,tr,h1,p{
  font-family: 'Rajdhani', sans-serif;
}
 body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background:${theme.colors.button}
}
body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background:${theme.colors.delete}
}

 button{
   cursor: pointer;
 }
 button:hover{
   opacity: 0.7;
 }
`;
