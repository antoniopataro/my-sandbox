import React, { useState, useEffect, useContext } from "react";

import Header from "../../components/EditDriver/Header";
import Form from "../../components/EditDriver/Form";

import { DriverProps, DriversContext } from "../../contexts/DriversProvider";

import { useNavigate, useLocation } from "react-router-dom";

import EditDriverStyles from "./styles";

function EditDriver() {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  const [teamId, setTeamId] = useState(0);

  const driver: DriverProps | any = state;

  const { drivers } = useContext(DriversContext);

  useEffect(() => {
    const driversIds = drivers.map((driver) => driver.id);

    const section = pathname.split("/")[pathname.split("/").length - 1];

    if (!driversIds.includes(driver?.id) && section !== "new") {
      navigate("/not-found");
    }
  }, []);

  return (
    <EditDriverStyles>
      <Header driverId={driver?.id} teamId={teamId} defaultName={driver?.name} />
      <Form setTeamId={setTeamId} teamKey={driver?.team["@key"]} />
    </EditDriverStyles>
  );
}

export default EditDriver;
