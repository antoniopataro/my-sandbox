import styled from "styled-components";

const HomeStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 80vw;
  min-height: 100vh;

  margin: 0 auto;
  padding: 10vh 0;

  background-color: var(--bg);

  .fixed-new {
    position: fixed;

    bottom: 10vh;
    right: 10vw;

    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 8px;
    padding: 8px 16px;

    outline: none;
    border: none;

    border-radius: 10px;

    cursor: pointer;

    text-decoration: none;

    color: white;
    background-color: #21a5fd;

    transition: 0.25s ease;
    transition-property: background-color;

    opacity: 0;

    animation: fadeIn 1s ease forwards 0.5s;

    :hover {
      background-color: #1a84ca;
    }

    svg {
      fill: white;
    }
  }
`;

export default HomeStyles;
