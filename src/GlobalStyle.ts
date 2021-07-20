import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      :root {
        --background-color: #F5F5F5;
        --text-active: #4d4d4d;
        --text-completed: #d9d9d9;
        --text-grey: #777;
        --title-color: rgba(175, 47, 47, 0.15);
      }

      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-family: 'Roboto', sans-serif;
      }

      body {
        min-height: 100vh;
        background-color: var(--background-color);
      }
      
      button{
        cursor: pointer;
      }
      
      
            button, input {
              outline: none;
              border: none;
      
            }
      li{
        list-style: none;
      }

      a{
       text-decoration: none;
      }
`;

export default GlobalStyle