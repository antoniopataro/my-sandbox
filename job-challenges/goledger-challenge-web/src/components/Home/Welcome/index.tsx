import React, { useState, useContext } from "react";

import { UserContext } from "../../../contexts/UserProvider";

import goLedgerLogo from "../../../assets/goLedgerLogo.png";
import raceFlag from "../../../assets/raceFlag.png";

import WelcomeStyles from "./styles";

interface WelcomeProps {
  title: string;
  subtitle: string;
  image: string;
  width: number;
}

function Welcome() {
  const { registerUser } = useContext(UserContext);

  const [activeWelcomePage, setActiveWelcomePage] = useState(1);
  const [name, setName] = useState("");
  const [animating, setAnimating] = useState(true);

  function handleContinue() {
    if (name) {
      registerUser(name);
      return;
    }

    if (activeWelcomePage >= 2) return;

    setActiveWelcomePage((prev) => prev + 1);
    setAnimating(true);
  }

  const handleData = (): WelcomeProps => {
    switch (activeWelcomePage) {
      case 1:
        return {
          title: "Welcome to my Challenge",
          subtitle: "This is car race dashboard to GoLedger's Front-End Developer's position. Enjoy!",
          image: goLedgerLogo,
          width: 200,
        };
      case 2:
        return {
          title: "What's your name?",
          subtitle: "",
          image: raceFlag,
          width: 72,
        };
      default:
        return {
          title: "",
          subtitle: "",
          image: "",
          width: 0,
        };
    }
  };

  return (
    <WelcomeStyles activeWelcomePage={activeWelcomePage} onAnimationEnd={() => setAnimating(false)}>
      <div id="modal">
        <div id="modal-top" className={animating ? "modal-top-animation" : ""}>
          <img src={handleData().image} alt="" width={handleData().width} />
        </div>
        <div id="modal-bottom">
          <span className={animating ? "slideLeft" : ""}>
            <h2 className="title">{handleData().title}</h2>
            <h3 className="subtitle">{handleData().subtitle}</h3>
            {activeWelcomePage === 2 && (
              <input type="text" placeholder="Type it here..." onChange={(e) => setName(e.target.value)} />
            )}
          </span>
          <span className={animating ? "slideLeft nav-buttons" : "nav-buttons"}>
            <button onClick={handleContinue}>
              <h3>Continue</h3>
            </button>
            {activeWelcomePage === 2 && (
              <a href="https://github.com/antoniopataro/goledger-challenge-web" target="_blank">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0C3.35812 0 0 3.4107 0 7.61744C0 11.1868 2.42 14.1735 5.6825 15C5.6475 14.8972 5.625 14.7778 5.625 14.6299V13.328C5.32062 13.328 4.81062 13.328 4.6825 13.328C4.16938 13.328 3.71312 13.1039 3.49188 12.6875C3.24624 12.2247 3.20374 11.5169 2.595 11.084C2.41438 10.9399 2.55188 10.7755 2.76 10.7977C3.14438 10.9082 3.46312 11.176 3.76312 11.5734C4.06188 11.9714 4.2025 12.0616 4.76062 12.0616C5.03124 12.0616 5.43624 12.0457 5.8175 11.9848C6.0225 11.456 6.37688 10.9691 6.81 10.7393C4.3125 10.4784 3.12062 9.21646 3.12062 7.50318C3.12062 6.76555 3.43 6.05205 3.95562 5.45091C3.78312 4.85421 3.56626 3.63733 4.02188 3.17393C5.14562 3.17393 5.825 3.9141 5.98812 4.11406C6.54812 3.91918 7.16312 3.80872 7.80938 3.80872C8.45688 3.80872 9.07438 3.91918 9.63562 4.11532C9.79688 3.91664 10.4769 3.17393 11.6031 3.17393C12.0606 3.63795 11.8412 4.85993 11.6669 5.45535C12.1894 6.05523 12.4969 6.76683 12.4969 7.50318C12.4969 9.2152 11.3069 10.4765 8.81312 10.7387C9.49938 11.1024 10 12.1244 10 12.8944V14.6299C10 14.6959 9.98562 14.7436 9.97812 14.8C12.9006 13.7596 15 10.9412 15 7.61744C15 3.4107 11.6419 0 7.5 0Z" />
                </svg>
                <span>
                  <h3>Github</h3>
                </span>
              </a>
            )}
          </span>
          <svg viewBox="0 0 40 10" width="40" height="10">
            <circle cx="5" cy="5" r="5" fill={activeWelcomePage === 1 ? "#008FFD" : "#d9d9d9"} />
            <circle cx="20" cy="5" r="5" fill={activeWelcomePage === 2 ? "#008FFD" : "#d9d9d9"} />
          </svg>
        </div>
      </div>
    </WelcomeStyles>
  );
}

export default Welcome;
