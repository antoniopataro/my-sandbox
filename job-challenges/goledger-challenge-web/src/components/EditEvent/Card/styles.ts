import styled from "styled-components";

interface CardStylesProps {
  checked: boolean;
}

const CardStyles = styled.div<CardStylesProps>`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;

  gap: 12px;
  padding-left: 12px;

  label {
    display: grid;
    place-items: center;

    width: 20px;
    height: 20px;

    input {
      display: none;
    }

    span {
      position: relative;

      display: grid;
      place-items: center;

      width: 20px;
      height: 20px;

      border: 2px solid transparent;

      cursor: pointer;

      border-radius: 50%;
      background-color: ${(props) => (props.checked ? "#404040" : "#d9d9d9")};

      transition: 0.25s ease;
      transition-property: background-color;

      ::before {
        position: absolute;
        content: "";

        height: 2.5px;
        width: 5px;

        border-radius: 2px;

        border-bottom: 3px solid white;
        border-left: 3px solid white;

        opacity: ${(props) => (props.checked ? "1" : "0")};
        transform: ${(props) => (props.checked ? "rotate(-45deg) scale(1)" : "rotate(-45deg) scale(0)")};

        transition: 0.25s ease;
        transition-property: transform opacity;
      }

      :hover {
        border-color: #404040;

        transition: 0.25s ease;
        transition-property: border-color;
      }
    }
  }

  .car-wrapper {
    position: relative;

    display: flex;
    flex-direction: row;

    width: 100%;
    height: 60px;

    align-items: center;
    justify-content: space-between;

    padding: 0 24px;

    border-radius: 10px;

    font-weight: 500;

    color: #404040;
    background-color: ${(props) => (props.checked ? "#d9d9d9" : "#A3A3A3")};

    outline: 2px solid;
    outline-color: transparent;

    cursor: pointer;

    transition: 0.25s ease;
    transition-property: background-color color outline-color;

    :hover {
      color: black;
      outline-color: black;
    }

    h2 {
      margin: 0;
    }

    .winner-indicator {
      position: absolute;

      width: 15px;
      height: 60px;

      right: 0;

      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      background-color: gold;
    }
  }
`;

export default CardStyles;
