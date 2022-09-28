import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  color: #404040;

  div {
    animation: slideDown20 1s ease forwards;

    h1 {
      line-height: 1em;
    }
  }

  button {
    display: grid;
    place-items: center;

    min-width: 25px;
    min-height: 25px;

    outline: none;
    border: none;

    cursor: pointer;

    border-radius: 4px;

    background-color: transparent;

    transition: 0.25s ease;
    transition-property: background-color;

    animation: fadeIn 1s ease forwards;

    :hover {
      background-color: #d9d9d9;

      svg {
        fill: black;
      }
    }

    svg {
      fill: #404040;

      transition: 0.25s ease;
      transition-property: fill;
    }
  }

  a {
    display: grid;
    place-items: center;

    padding: 15px;

    :hover {
      svg {
        fill: #1a84ca;
      }
    }

    svg {
      fill: #21a5fd;

      transition: 0.25s ease;
      transition-property: fill;
    }
  }
`;

export default HeaderStyles;
