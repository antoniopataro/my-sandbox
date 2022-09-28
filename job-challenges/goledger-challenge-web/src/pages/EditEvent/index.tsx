import React, { useState, useEffect, useContext } from "react";

import Header from "../../components/EditEvent/Header";
import Form from "../../components/EditEvent/Form";

import { EventProps, EventsContext } from "../../contexts/EventsProvider";

import { useNavigate, useLocation } from "react-router-dom";

import EditEventStyles from "./styles";

function EditEvent() {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  const { events } = useContext(EventsContext);

  const event: EventProps | any = state;

  useEffect(() => {
    const eventsNames = events.map((event) => event.name);

    const section = pathname.split("/")[pathname.split("/").length - 1];

    if (!eventsNames.includes(event?.name) && section !== "new") {
      navigate("/not-found");
    }
  }, []);

  const [date, setDate] = useState(event?.date);
  const [prize, setPrize] = useState(event?.prize);
  const [winnerKey, setWinnerKey] = useState(event?.winner["@key"]);

  return (
    <EditEventStyles>
      <Header date={date} prize={prize} winnerKey={winnerKey} defaultName={event?.name} />
      <Form
        setDate={setDate}
        setPrize={setPrize}
        setWinnerKey={setWinnerKey}
        defaultDate={event?.date}
        winnerKey={event?.winner["@key"]}
        prize={event?.prize}
      />
    </EditEventStyles>
  );
}

export default EditEvent;
