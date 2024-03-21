import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.link {
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}`;