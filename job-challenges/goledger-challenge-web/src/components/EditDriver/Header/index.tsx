import React, { useState, useRef, useContext } from "react";

import { ToastContext } from "../../../contexts/ToastProvider";
import { DriversContext } from "../../../contexts/DriversProvider";
import { TeamsContext } from "../../../contexts/TeamsProvider";

import { useNavigate } from "react-router-dom";

import HeaderStyles from "./styles";

interface HeaderProps {
  driverId: number;
  defaultName: string;
  teamId: number;
}

function Header({ driverId, defaultName, teamId }: HeaderProps) {
  const navigate = useNavigate();

  const { setMessage, setToast } = useContext(ToastContext);
  const { teams } = useContext(TeamsContext);
  const { handleCreateDriver, handleUpdateDriver } = useContext(DriversContext);

  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 10 ** 16));

  const nameRef = useRef<HTMLHeadingElement>(null);
  const name = nameRef.current?.innerText;

  const team = teams.find((team) => team.id === teamId);

  const createDriver = async () => {
    const name = nameRef.current?.innerText;

    if (!teamId || !name) {
      setMessage("You need to pass a name and choose a team");
      setToast(true);
      return;
    }

    const response = await handleCreateDriver(name, randomId, teamId);

    if (response === "failed to write asset to ledger: asset already exists") {
      setMessage("Driver already exists");
      setToast(true);
      return;
    }

    setMessage("Driver added");
    setToast(true);
    navigate(-1);
  };

  const updateDriver = async () => {
    const name = nameRef.current?.innerText;

    const response = await handleUpdateDriver(driverId, { name: name!, teamKey: team?.["@key"]! });

    setMessage("Saved");
    setToast(true);
    navigate(-1);
  };

  return (
    <HeaderStyles>
      <span>
        <h1>👲 </h1>
        <h1
          ref={nameRef}
          contentEditable={"plaintext-only"}
          data-placeholder="Driver's name..."
          suppressContentEditableWarning
        >
          {defaultName}
        </h1>
      </span>
      <menu>
        <button onClick={() => navigate(-1)}>
          <h3>Cancel</h3>
        </button>
        <button onClick={defaultName ? updateDriver : createDriver}>
          <h3>{defaultName ? "Save" : "Add"}</h3>
        </button>
      </menu>
    </HeaderStyles>
  );
}

export default Header;
