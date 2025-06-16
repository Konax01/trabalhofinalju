import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    background:rgb(255, 255, 255); /* rosa claro */
    color: #222;
    min-height: 100vh;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
  }

  h1, h2, h3 {
    font-weight: 700;
    color: #d72660; /* rosa escuro */
  }

  nav {
    background: #d72660; /* rosa escuro */
    color: #fff;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  nav a:hover {
    color: #fbb6ce; /* rosa médio */
  }

  footer {
    background: #d72660; /* rosa escuro */
    color: #fff;
    text-align: center;
    padding: 1rem 0;
    margin-top: auto;
  }

  /* Responsividade */
  @media (max-width: 600px) {
    main {
      padding: 1rem 0.5rem;
      margin: 1rem 0.5rem;
    }
    nav {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .animais-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

export default GlobalStyles;