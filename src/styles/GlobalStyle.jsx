import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #0f1724;
    --card:#0b1220;
    --accent: #7c5cff;
    --muted: #97a0b8;
    --glass: rgba(255,255,255,0.03);
  }

  *{box-sizing:border-box}
  html,body,#root{height:100%}
  body{
    margin:0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: linear-gradient(180deg,#071123 0%, #0b1220 100%);
    color: #e6eef8;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    line-height:1.5;
  }

  a{color:inherit; text-decoration:none}
  img{max-width:100%; display:block}
  button{font-family:inherit}
`;
