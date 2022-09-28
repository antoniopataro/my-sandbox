import React, { useState, useEffect, useContext } from "react";

import Header from "../../components/EditCar/Header";
import Form from "../../components/EditCar/Form";

import { useNavigate, useLocation } from "react-router-dom";

import { CarProps, CarsContext } from "../../contexts/CarsProvider";

import EditCarStyles from "./styles";

function EditCar() {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  const { cars } = useContext(CarsContext);

  const car: CarProps | any = state;

  useEffect(() => {
    const carsId = cars.map((car) => car.id);

    const section = pathname.split("/")[pathname.split("/").length - 1];

    if (!carsId.includes(car?.id) && section !== "new") {
      navigate("/not-found");
    }
  }, []);

  const [driverId, setDriverId] = useState(0);

  return (
    <EditCarStyles>
      <Header carId={car?.id} driverId={driverId} defaultModel={car?.model} />
      <Form setDriverId={setDriverId} driverKey={car?.driver["@key"]} />
    </EditCarStyles>
  );
}

export default EditCar;
