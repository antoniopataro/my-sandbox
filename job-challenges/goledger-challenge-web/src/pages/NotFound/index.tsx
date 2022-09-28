import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import NotFoundStyles from "./styles";

function NotFound() {
  const navigate = useNavigate();

  const [countdown, setCountDown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

    setInterval(() => {
      setCountDown(countdown - 1);
    }, 1000);
  }, [countdown]);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <NotFoundStyles>
      <div>
        <h1>404!</h1>
        <h2>We could not find what you're looking for :(</h2>
        <h2>You'll be redirected in {countdown} seconds.</h2>
      </div>
    </NotFoundStyles>
  );
}

export default NotFound;
