import React, { useState, useRef, useContext } from "react";

import { ToastContext } from "../../../contexts/ToastProvider";
import { TeamsContext } from "../../../contexts/TeamsProvider";

import { useNavigate } from "react-router-dom";

import HeaderStyles from "./styles";

interface HeaderProps {
  teamId: number;
  defaultName: string;
}

function Header({ teamId, defaultName }: HeaderProps) {
  const navigate = useNavigate();

  const { setMessage, setToast } = useContext(ToastContext);
  const { handleCreateTeam, handleUpdateTeam } = useContext(TeamsContext);

  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 10 ** 16));

  const nameRef = useRef<HTMLHeadingElement>(null);
  const name = nameRef.current?.innerText;

  const createTeam = async () => {
    const name = nameRef.current?.innerText;

    if (!name) {
      setMessage("You need to pass a name");
      setToast(true);
      return;
    }

    const response = await handleCreateTeam(name, randomId);

    if (response === "failed to write asset to ledger: asset already exists") {
      setMessage("Team already exists");
      setToast(true);
      return;
    }

    setMessage("Team added");
    setToast(true);
    navigate(-1);
  };

  const updateTeam = async () => {
    const name = nameRef.current?.innerText;

    const response = await handleUpdateTeam(teamId!, { name: name! });

    setMessage("Saved");
    setToast(true);
    navigate(-1);
  };

  return (
    <HeaderStyles>
      <span>
        <h1>🏆 </h1>
        <h1
          ref={nameRef}
          contentEditable={"plaintext-only"}
          data-placeholder="Team name..."
          suppressContentEditableWarning
        >
          {defaultName}
        </h1>
      </span>
      <menu>
        <button onClick={() => navigate(-1)}>
          <h3>Cancel</h3>
        </button>
        <button onClick={defaultName ? updateTeam : createTeam}>
          <h3>{defaultName ? "Save" : "Add"}</h3>
        </button>
      </menu>
    </HeaderStyles>
  );
}

export default Header;
