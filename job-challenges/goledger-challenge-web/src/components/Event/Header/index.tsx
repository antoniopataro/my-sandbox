import { useNavigate } from "react-router-dom";

import HeaderStyles from "./styles";

import { EventProps } from "../../../contexts/EventsProvider";

interface HeaderProps {
  path: string;
  event: EventProps;
}

function Header({ path, event }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderStyles>
      <div className="title-wrapper">
        <div className="title">
          <span onClick={() => navigate("/")}>
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.4815 24.473L0.553977 12.5455L12.4815 0.617897L14.7827 2.89347L6.79261 10.8835H26.8636V14.2074H6.79261L14.7827 22.1847L12.4815 24.473Z"
                fill="black"
              />
            </svg>
          </span>
          <h1>🏁 {event?.name}</h1>
        </div>
        <nav>
          <a
            onClick={() => navigate(`/${event["@key"]}/cars`, { state: event })}
            style={path === "cars" ? { color: "#21A5FD" } : {}}
          >
            <h2>Cars</h2>
          </a>
          <a
            onClick={() => navigate(`/${event["@key"]}/drivers/`, { state: event })}
            style={path === "drivers" ? { color: "#21A5FD" } : {}}
          >
            <h2>Drivers</h2>
          </a>
          <a
            onClick={() => navigate(`/${event["@key"]}/teams/`, { state: event })}
            style={path === "teams" ? { color: "#21A5FD" } : {}}
          >
            <h2>Teams</h2>
          </a>
        </nav>
      </div>
      <button onClick={() => navigate(`/edit/${event["@key"]}`, { state: event })}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.45873 12.2841C3.49444 12.2841 3.53015 12.2805 3.56587 12.2752L6.56944 11.7484C6.60515 11.7412 6.63908 11.7252 6.66408 11.6984L14.2337 4.12873C14.2503 4.11221 14.2634 4.09259 14.2724 4.07098C14.2813 4.04938 14.2859 4.02622 14.2859 4.00284C14.2859 3.97945 14.2813 3.95629 14.2724 3.93469C14.2634 3.91309 14.2503 3.89346 14.2337 3.87694L11.2659 0.9073C11.2319 0.873372 11.1873 0.855515 11.1391 0.855515C11.0909 0.855515 11.0462 0.873372 11.0123 0.9073L3.44265 8.47694C3.41587 8.50373 3.3998 8.53587 3.39265 8.57159L2.86587 11.5752C2.8485 11.6708 2.8547 11.7693 2.88395 11.862C2.9132 11.9547 2.96461 12.0389 3.03373 12.1073C3.15158 12.2216 3.2998 12.2841 3.45873 12.2841ZM4.6623 9.1698L11.1391 2.6948L12.448 4.00373L5.97123 10.4787L4.38373 10.7591L4.6623 9.1698ZM14.5712 13.7841H1.42837C1.1123 13.7841 0.856939 14.0394 0.856939 14.3555V14.9984C0.856939 15.0769 0.921225 15.1412 0.999796 15.1412H14.9998C15.0784 15.1412 15.1427 15.0769 15.1427 14.9984V14.3555C15.1427 14.0394 14.8873 13.7841 14.5712 13.7841Z"
            fill="#404040"
          />
        </svg>
      </button>
    </HeaderStyles>
  );
}

export default Header;
