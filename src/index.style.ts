import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    height: 100vh;
  }
  body {
    box-sizing: border-box;
    font-size: 1.6rem; 
    margin: 0;
    padding: 0;
  }
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  a, button {
    cursor: pointer;
  }
  pre {
    white-space: pre-line;
  }
  button {
      background-color: red;
      padding: 5px;
  }
  input {
      border: 1px solid gray;
      padding: 5px;
      margin: 10px;
  }

  .app {
    display: flex;
    flex-direction: row;
  }
  .loc-form {
      position: fixed;
      right: 0;
      z-index: 19;
      background-color: white;
      display: flex;
      flex-flow: wrap;
      padding: 5px;
      align-items: center;
      max-width: 100vw;

      p {
        font-style: italic;
      }
      input {
        border-radius: 5px;
      }
      button {
        max-height: 30px;
        border-radius: 5px;
        color: white;
        background-color: lightblue;
      }
  }
`

export default GlobalStyle