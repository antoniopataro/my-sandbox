import React, { useState, useEffect, useContext } from "react";

import Card from "../Card";

import { DriversContext } from "../../../contexts/DriversProvider";

import { Link } from "react-router-dom";

import FormStyles from "./styles";

interface FormProps {
  setDriverId: React.Dispatch<React.SetStateAction<number>>;
  driverKey: string;
}

function Form({ driverKey, setDriverId }: FormProps) {
  const { drivers } = useContext(DriversContext);

  const driverId = drivers.find((driver) => driver["@key"] === driverKey);
  const driver = drivers.find((driver) => driver.id === driverId?.id);

  const [checked, setChecked] = useState(driver?.id.toString()!);

  useEffect(() => {
    setDriverId(Number(checked));
  }, [checked]);

  return (
    <FormStyles>
      {drivers.length === 0 ? (
        <h2>
          <span style={{ fontSize: "20px" }}>👲</span> There are no drivers.
        </h2>
      ) : (
        <h2>
          <span style={{ fontSize: "20px" }}>👲</span> Car's driver:
        </h2>
      )}
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            <Card name={driver.name} id={driver.id} checked={checked} setChecked={setChecked} />
          </li>
        ))}
      </ul>
      <Link to={`/newEvent/drivers/edit/new`} className="new-asset-link">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.13049 0H4.86962V4.86953H0V7.1304H4.86962V12H7.13049V7.1304H12V4.86953H7.13049V0Z"
          />
        </svg>
        <h2>New driver...</h2>
      </Link>
    </FormStyles>
  );
}

export default Form;
