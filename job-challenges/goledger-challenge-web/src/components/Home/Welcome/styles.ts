import styled from "styled-components";

interface Props {
  activeWelcomePage: number;
}

const WelcomeStyles = styled.div<Props>`
  position: absolute;

  z-index: 1;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  #modal {
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 500px;

    justify-content: space-between;

    padding: 40px;

    border-radius: 10px;

    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

    background: ${(props) =>
      props.activeWelcomePage === 1 ? "linear-gradient(200deg, #A0B3D8 0%, rgba(255, 255, 255, 1) 50%)" : ""};

    background: ${(props) =>
      props.activeWelcomePage === 2 ? "linear-gradient(200deg, #90D2FE 0%, rgba(255, 255, 255, 1) 50%)" : ""};

    .modal-top-animation {
      animation: slideDown20 1s ease-out forwards;
    }

    #modal-top {
      display: grid;
      place-items: center;

      height: 50%;

      img {
        pointer-events: none;
      }
    }

    #modal-bottom {
      position: relative;

      display: flex;
      flex-direction: column;

      height: 50%;

      justify-content: center;

      gap: 20px;

      .slideLeft {
        opacity: 0;

        animation: slideLeft20 1s ease forwards 0.25s;
      }

      span {
        display: flex;
        flex-direction: column;

        gap: 4px;

        .title {
          font-weight: 600;
        }

        .subtitle {
          color: #808080;
        }

        input {
          width: fit-content;

          padding: 4px 0;

          outline: none;
          border: none;

          border-bottom: 1px solid;
          border-color: transparent;

          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 14px;

          color: #6d6d6d;
          background-color: transparent;

          transition: 0.25s ease;
          transition-property: border-color;

          :active,
          :focus {
            border-color: #d9d9d9;
          }

          ::placeholder {
            color: #d9d9d9;
          }
        }
      }

      .nav-buttons {
        display: flex;
        flex-direction: row;

        gap: 10px;

        button {
          width: fit-content;

          outline: none;
          border: none;

          padding: 12px 24px;

          font-family: "Poppins", sans-serif;

          border-radius: 10px;

          cursor: pointer;

          color: white;
          background-color: #21a5fd;

          transition: 0.25s ease;
          transition-property: background-color;

          :hover {
            background-color: #1a84ca;
          }
        }

        a {
          display: flex;
          flex-direction: row;

          width: fit-content;

          gap: 10px;
          padding: 12px 24px;

          outline: none;
          border: none;

          font-family: "Poppins", sans-serif;
          font-size: 14px;
          text-decoration: none;

          border-radius: 10px;

          cursor: pointer;

          color: #21a5fd;
          background-color: transparent;

          border: 2px solid #21a5fd;

          transition: 0.25s ease;
          transition-property: color background-color;

          :hover {
            color: #1a84ca;

            svg {
              fill: #1a84ca;
            }
          }

          svg {
            position: relative;

            fill: #21a5fd;

            transition: 0.15s ease;
            transition-property: fill;
          }
        }
      }

      svg {
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  @media (max-width: 768px) {
    #modal {
      width: 100vw;
      height: 100vh;

      border-radius: 0;
    }
  }
`;

export default WelcomeStyles;
