import React, { useRef, useContext } from "react";

import { ToastContext } from "../../../contexts/ToastProvider";
import { EventsContext } from "../../../contexts/EventsProvider";
import { TeamsContext } from "../../../contexts/TeamsProvider";

import { useNavigate } from "react-router-dom";

import HeaderStyles from "./styles";

interface HeaderProps {
  date: Date;
  prize: number;
  winnerKey: string;
  defaultName: string;
}

function Header({ date, prize, winnerKey, defaultName }: HeaderProps) {
  const navigate = useNavigate();

  const { setMessage, setToast } = useContext(ToastContext);
  const { handleCreateEvent, handleUpdateEvent } = useContext(EventsContext);
  const { teams } = useContext(TeamsContext);

  const nameRef = useRef<HTMLHeadingElement>(null);
  const name = nameRef.current?.innerText;

  const team = teams.find((team) => team["@key"] === winnerKey);

  const createEvent = async () => {
    if (!name || !date || !prize || !team?.id) {
      setMessage("You need to pass a name, prize, date and choose a winner team");
      setToast(true);
      return;
    }

    const response = await handleCreateEvent(name, date, prize, team?.id);

    if (response === "failed to write asset to ledger: asset already exists") {
      setMessage("Event already exists");
      setToast(true);
      return;
    }

    setMessage("Event added");
    setToast(true);
    navigate(-1);
  };

  const updateEvent = async () => {
    const response = await handleUpdateEvent(defaultName!, date, { prize: prize, winnerKey: winnerKey });

    setMessage("Saved");
    setToast(true);
    navigate("/");
  };

  return (
    <HeaderStyles>
      <span>
        <h1>🏁 </h1>
        <h1
          ref={nameRef}
          contentEditable={defaultName ? "false" : "plaintext-only"}
          data-placeholder="Event name..."
          suppressContentEditableWarning
        >
          {defaultName}
        </h1>
      </span>
      <menu>
        <button onClick={() => navigate(-1)}>
          <h3>Cancel</h3>
        </button>
        <button onClick={defaultName ? updateEvent : createEvent}>
          <h3>{defaultName ? "Save" : "Add"}</h3>
        </button>
      </menu>
    </HeaderStyles>
  );
}

export default Header;
