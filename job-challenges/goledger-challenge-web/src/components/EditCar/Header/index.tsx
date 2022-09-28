import React, { useState, useRef, useContext } from "react";

import { ToastContext } from "../../../contexts/ToastProvider";
import { DriversContext } from "../../../contexts/DriversProvider";
import { CarsContext } from "../../../contexts/CarsProvider";

import { useNavigate } from "react-router-dom";

import HeaderStyles from "./styles";

interface HeaderProps {
  carId: number;
  driverId: number;
  defaultModel: string;
}

function Header({ carId, defaultModel, driverId }: HeaderProps) {
  const navigate = useNavigate();

  const { setMessage, setToast } = useContext(ToastContext);
  const { drivers } = useContext(DriversContext);
  const { handleCreateCar, handleUpdateCar } = useContext(CarsContext);

  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 10 ** 16));

  const driver = drivers.find((driver) => driver.id === driverId);

  const modelRef = useRef<HTMLHeadingElement>(null);
  const model = modelRef.current?.innerText;

  const createCar = async () => {
    const model = modelRef.current?.innerText;

    if (!driverId || !model) {
      setMessage("You need to pass a model and choose a driver");
      setToast(true);
      return;
    }

    const response = await handleCreateCar(model!, randomId, driverId);

    if (response === "failed to write asset to ledger: asset already exists") {
      setMessage("Car already exists");
      setToast(true);
      return;
    }

    setMessage("Car added");
    setToast(true);
    navigate(-1);
  };

  const updateCar = async () => {
    const model = modelRef.current?.innerText;

    const response = await handleUpdateCar(carId, { model: model!, driverKey: driver?.["@key"]! });

    setMessage("Saved");
    setToast(true);
    navigate(-1);
  };

  return (
    <HeaderStyles>
      <span contentEditable="false">
        <h1>🚗 </h1>
        <h1
          ref={modelRef}
          contentEditable={"plaintext-only"}
          data-placeholder="Car model..."
          suppressContentEditableWarning
        >
          {defaultModel}
        </h1>
      </span>
      <menu>
        <button onClick={() => navigate(-1)}>
          <h3>Cancel</h3>
        </button>
        <button onClick={defaultModel ? updateCar : createCar}>
          <h3>{defaultModel ? "Save" : "Add"}</h3>
        </button>
      </menu>
    </HeaderStyles>
  );
}

export default Header;
