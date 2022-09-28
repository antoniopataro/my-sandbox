import React, { useEffect, useContext } from "react";

import Header from "../../components/Driver/Header";
import Drivers from "../../components/Driver/Cars";

import { DriverProps, DriversContext } from "../../contexts/DriversProvider";

import { useNavigate, useLocation } from "react-router-dom";

import DriverStyles from "./styles";

function Driver() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { drivers } = useContext(DriversContext);

  const { driver }: DriverProps | any = state;

  useEffect(() => {
    const driversIds = drivers.map((driver) => driver.id);

    if (!driversIds.includes(driver?.id)) {
      navigate("/not-found");
    }
  }, []);

  return (
    <DriverStyles>
      <Header driverName={driver?.name} />
      <Drivers driverKey={driver ? driver["@key"] : ""} />
    </DriverStyles>
  );
}

export default Driver;
