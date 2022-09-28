import { useNavigate } from "react-router-dom";

import HeaderStyles from "./styles";

interface HeaderProps {
  teamName: string;
}

function Header({ teamName }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderStyles>
      <div className="title-wrapper">
        <div className="title">
          <span onClick={() => navigate(-1)}>
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.4815 24.473L0.553977 12.5455L12.4815 0.617897L14.7827 2.89347L6.79261 10.8835H26.8636V14.2074H6.79261L14.7827 22.1847L12.4815 24.473Z"
                fill="black"
              />
            </svg>
          </span>
          <h1>🏆 {teamName}</h1>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
