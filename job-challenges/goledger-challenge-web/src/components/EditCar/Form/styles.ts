import styled from "styled-components";

const FormStyles = styled.section`
  width: 100%;

  opacity: 0;

  animation: slideDown20 1s ease forwards 0.25s;

  h2 {
    margin-top: 50px;
  }

  ul {
    display: flex;
    flex-direction: column;

    width: 60%;

    gap: 20px;

    margin-top: 20px;

    li {
      list-style: none;

      width: 100%;
    }
  }

  .new-asset-link {
    display: flex;
    flex-direction: row;

    width: fit-content;

    align-items: center;

    gap: 8px;
    padding: 8px 16px;
    margin-top: 50px;

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

    h2 {
      margin: 0;
    }

    :hover {
      background-color: #1a84ca;
    }

    svg {
      fill: white;
    }
  }

  @media (max-width: 768px) {
    ul {
      width: 100%;
    }
  }
`;

export default FormStyles;
