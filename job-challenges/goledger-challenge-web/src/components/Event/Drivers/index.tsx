import React, { useContext } from "react";

import { ToastContext } from "../../../contexts/ToastProvider";
import { EventProps } from "../../../contexts/EventsProvider";
import { TeamsContext } from "../../../contexts/TeamsProvider";
import { DriversContext } from "../../../contexts/DriversProvider";

import { useNavigate } from "react-router-dom";

import DriversStyles from "./styles";

interface DriversProps {
  event: EventProps;
}

function Drivers({ event }: DriversProps) {
  const navigate = useNavigate();

  const { setMessage, setToast } = useContext(ToastContext);
  const { teams } = useContext(TeamsContext);
  const { drivers, handleDeleteDriver } = useContext(DriversContext);

  const deleteDriver = async (id: number) => {
    const response = await handleDeleteDriver(id);

    if (response === "failed to delete asset: another asset holds a reference to this one") {
      setMessage("ERROR: There are cars related to this driver");
      setToast(true);
      return;
    }

    setMessage("Driver deleted");
    setToast(true);
  };

  const handleTeam = (driverTeamKey: string) => {
    const team = teams.find((team) => team["@key"] === driverTeamKey);

    return team?.name;
  };

  return (
    <DriversStyles>
      <ul>
        <h1>👲</h1>
        {drivers.map((driver) => (
          <li key={driver.id}>
            <div
              className="driver-wrapper"
              onClick={() => navigate(`/driver/${driver.id}`, { state: { driver: driver, event: event } })}
            >
              <h2>{driver.name}</h2>
              <h2 className="secondary-card-info">{handleTeam(driver.team["@key"])}</h2>
            </div>
            <button onClick={() => navigate(`/${event["@key"]}/drivers/edit/${driver.id}`, { state: driver })}>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.45873 12.2841C3.49444 12.2841 3.53015 12.2805 3.56587 12.2752L6.56944 11.7484C6.60515 11.7412 6.63908 11.7252 6.66408 11.6984L14.2337 4.12873C14.2503 4.11221 14.2634 4.09259 14.2724 4.07098C14.2813 4.04938 14.2859 4.02622 14.2859 4.00284C14.2859 3.97945 14.2813 3.95629 14.2724 3.93469C14.2634 3.91309 14.2503 3.89346 14.2337 3.87694L11.2659 0.9073C11.2319 0.873372 11.1873 0.855515 11.1391 0.855515C11.0909 0.855515 11.0462 0.873372 11.0123 0.9073L3.44265 8.47694C3.41587 8.50373 3.3998 8.53587 3.39265 8.57159L2.86587 11.5752C2.8485 11.6708 2.8547 11.7693 2.88395 11.862C2.9132 11.9547 2.96461 12.0389 3.03373 12.1073C3.15158 12.2216 3.2998 12.2841 3.45873 12.2841ZM4.6623 9.1698L11.1391 2.6948L12.448 4.00373L5.97123 10.4787L4.38373 10.7591L4.6623 9.1698ZM14.5712 13.7841H1.42837C1.1123 13.7841 0.856939 14.0394 0.856939 14.3555V14.9984C0.856939 15.0769 0.921225 15.1412 0.999796 15.1412H14.9998C15.0784 15.1412 15.1427 15.0769 15.1427 14.9984V14.3555C15.1427 14.0394 14.8873 13.7841 14.5712 13.7841Z" />
              </svg>
            </button>
            <button onClick={() => deleteDriver(driver.id)}>
              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.22917 1.26H4.08333C4.16354 1.26 4.22917 1.197 4.22917 1.12V1.26H9.77083V1.12C9.77083 1.197 9.83646 1.26 9.91667 1.26H9.77083V2.52H11.0833V1.12C11.0833 0.50225 10.5602 0 9.91667 0H4.08333C3.43984 0 2.91667 0.50225 2.91667 1.12V2.52H4.22917V1.26ZM13.4167 2.52H0.583333C0.260677 2.52 0 2.77025 0 3.08V3.64C0 3.717 0.065625 3.78 0.145833 3.78H1.24687L1.69714 12.9325C1.7263 13.5293 2.24036 14 2.86198 14H11.138C11.7615 14 12.2737 13.531 12.3029 12.9325L12.7531 3.78H13.8542C13.9344 3.78 14 3.717 14 3.64V3.08C14 2.77025 13.7393 2.52 13.4167 2.52ZM10.9977 12.74H3.00234L2.5612 3.78H11.4388L10.9977 12.74Z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </DriversStyles>
  );
}

export default Drivers;
