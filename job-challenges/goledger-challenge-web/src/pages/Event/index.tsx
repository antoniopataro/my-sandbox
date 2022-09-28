import React, { useEffect, useContext } from "react";

import Header from "../../components/Event/Header";
import Cars from "../../components/Event/Cars";
import Drivers from "../../components/Event/Drivers";
import Teams from "../../components/Event/Teams";

import { EventProps, EventsContext } from "../../contexts/EventsProvider";

import { Link, useNavigate, useLocation } from "react-router-dom";

import EventStyles from "./styles";

function Event() {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  const { events } = useContext(EventsContext);

  const event: EventProps | any = state;
  const eventKey = pathname.split("/")[1];

  useEffect(() => {
    const eventKeys = events.map((event) => event["@key"]);

    if (!eventKeys.includes(eventKey)) {
      navigate("/not-found");
    }
  }, []);

  const section = pathname.split("/")[2];

  const resolveMainComponent = () => {
    switch (section) {
      case "cars":
        return <Cars event={event} />;
      case "drivers":
        return <Drivers event={event} />;
      case "teams":
        return <Teams event={event} />;
      default:
        return "";
    }
  };

  return (
    <EventStyles>
      <Header path={section} event={event} />
      {resolveMainComponent()}
      <Link to={`/${event ? event["@key"] : ""}/${section}/edit/new`} className="fixed-new">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.13049 0H4.86962V4.86953H0V7.1304H4.86962V12H7.13049V7.1304H12V4.86953H7.13049V0Z"
          />
        </svg>
        <h2>New {section.slice(0, section.length - 1)}...</h2>
      </Link>
    </EventStyles>
  );
}

export default Event;
