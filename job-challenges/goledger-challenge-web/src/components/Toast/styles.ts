import styled from "styled-components";

interface Props {
  active: boolean;
  bgColor: string;
}

const ToastStyles = styled.div<Props>`
  position: fixed;

  bottom: 10vh;

  left: 0;
  right: 0;

  display: grid;
  place-items: center;

  width: fit-content;

  padding: 8px 16px;

  margin: 0 auto;

  opacity: 0;

  border-radius: 4px;

  color: #fff;
  background-color: ${(props) => props.bgColor};

  animation: ${(props) => (props.active ? "slideUp10" : "slideFadeDown10")} 0.25s ease forwards;
`;

export default ToastStyles;
