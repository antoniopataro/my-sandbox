import styled from "styled-components";

const NotFoundStyles = styled.main`
  display: grid;
  place-items: center;

  width: 100vw;
  min-height: 100vh;

  align-items: center;

  text-align: center;

  opacity: 0;

  animation: fadeIn 0.25s ease forwards;

  h1 {
    font-weight: 700;
  }

  h2 {
    color: #404040;
  }
`;

export default NotFoundStyles;
