import styled from "styled-components";

const FormStyles = styled.section`
  width: 100%;

  opacity: 0;

  animation: slideDown20 1s ease forwards 0.25s;

  form {
    display: flex;
    flex-direction: column;

    width: 60%;

    gap: 20px;

    margin-top: 50px;

    input {
      position: relative;

      width: 100%;
      height: 60px;

      padding: 0 24px;

      outline: none;
      border: none;

      resize: none;

      font-weight: 500;

      border-radius: 10px;
      background-color: #d9d9d9;

      ::placeholder {
        text-decoration: underline;

        color: #808080;
      }

      ::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }

  section {
    h2 {
      margin-top: 50px;
    }

    ul {
      width: 60%;

      display: flex;
      flex-direction: column;

      gap: 20px;

      margin-top: 20px;

      li {
        list-style: none;

        width: 100%;
      }
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

    :hover {
      background-color: #1a84ca;
    }

    svg {
      fill: white;
    }
  }

  @media (max-width: 768px) {
    section ul,
    form {
      width: 100%;
    }
  }
`;

export default FormStyles;
