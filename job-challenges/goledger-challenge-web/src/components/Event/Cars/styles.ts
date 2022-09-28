import styled from "styled-components";

const CarsStyles = styled.section`
  display: flex;

  width: 100%;
  height: 100%;

  opacity: 0;

  animation: slideDown20 1s ease forwards 0.25s;

  ul {
    display: flex;
    flex-direction: column;

    width: 60%;

    gap: 20px;
    padding: 40px 0;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;

      width: 100%;
      height: fit-content;

      align-items: center;

      gap: 12px;

      .car-wrapper {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 60px;

        align-items: center;
        justify-content: space-between;

        gap: 12px;
        padding: 0 24px;

        border-radius: 10px;

        color: #808080;
        background-color: #d9d9d9;

        overflow: hidden;

        h2:first-of-type {
          color: #404040;
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
    }
  }

  @media (max-width: 768px) {
    ul {
      width: 100%;
    }
  }
`;

export default CarsStyles;
