import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  .title-wrapper {
    display: flex;
    flex-direction: column;

    opacity: 0;

    animation: slideDown20 1s ease forwards;

    .title {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 24px;

      span {
        display: grid;
        place-items: center;

        transition: 0.25s ease;
        transition-property: transform;

        cursor: pointer;

        :hover {
          transform: translateX(-4px);
        }
      }

      h1 {
        width: 100%;
      }
    }

    nav {
      display: flex;
      flex-direction: row;

      width: fit-content;

      gap: 12px;

      a {
        position: relative;

        text-decoration: none;
        color: #404040;

        font-size: 16px;
        font-weight: 500;

        cursor: pointer;

        :after {
          content: "";
          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 2px;

          opacity: 0;

          background-color: #21a5fd;

          transition: 0.25s ease;
          transition-property: opacity;
        }

        :hover {
          :after {
            opacity: 1;
          }
        }
      }
    }
  }

  button {
    display: grid;
    place-items: center;

    min-width: 30px;
    min-height: 30px;

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
`;

export default HeaderStyles;
