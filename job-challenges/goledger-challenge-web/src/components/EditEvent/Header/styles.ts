import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  gap: 12px;

  opacity: 0;

  animation: slideDown20 1s ease forwards;

  span {
    display: flex;
    flex-direction: row;
  }

  h1:last-of-type {
    width: fit-content;

    padding: 4px 8px;

    outline: none;
    border: none;

    border-radius: 10px;

    overflow: hidden;

    transition: 0.25s ease;
    transition-property: background-color;

    :hover {
      background-color: #d9d9d9;
    }

    :empty:before {
      content: attr(data-placeholder);
      color: #808080;
      text-decoration: underline;
      cursor: text;
    }
  }

  menu {
    display: flex;
    flex-direction: row;

    gap: 12px;

    button {
      padding: 8px 16px;

      outline: none;
      border: none;

      border-radius: 10px;

      cursor: pointer;

      background-color: transparent;

      font-weight: 500;

      transition: 0.25s ease;
      transition-property: background-color;

      :first-of-type {
        color: #404040;
        outline: 1px solid #404040;
      }

      :last-of-type {
        color: white;
        background-color: #21a5fd;

        :hover {
          background-color: #1a84ca;
        }
      }
    }
  }
`;

export default HeaderStyles;
