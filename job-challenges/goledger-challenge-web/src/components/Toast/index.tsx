import React, { useContext } from "react";

import { ToastContext } from "../../contexts/ToastProvider";

import ToastStyles from "./styles";

function Toast() {
  const { message, toast } = useContext(ToastContext);

  const handleBgColor = () => {
    switch (message) {
      case "Car added":
        return "#21A5FD";
      case "Car deleted":
        return "#21A5FD";
      case "Driver added":
        return "#21A5FD";
      case "Driver deleted":
        return "#21A5FD";
      case "Team added":
        return "#21A5FD";
      case "Team deleted":
        return "#21A5FD";
      case "Event added":
        return "#21A5FD";
      case "Event deleted":
        return "#21A5FD";
      case "Saved":
        return "#21A5FD";
      default:
        return "#FD2121";
    }
  };

  return (
    <ToastStyles active={toast} bgColor={handleBgColor()}>
      <h2>{message}</h2>
    </ToastStyles>
  );
}

export default Toast;
