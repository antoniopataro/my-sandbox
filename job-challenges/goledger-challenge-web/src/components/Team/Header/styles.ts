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
        width: fit-content;
      }
    }
  }
`;

export default HeaderStyles;
