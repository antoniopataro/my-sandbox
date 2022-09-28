import React, { useContext } from "react";

import Header from "../../components/Home/Header";
import Events from "../../components/Home/Events";
import Welcome from "../../components/Home/Welcome";

import { UserContext } from "../../contexts/UserProvider";

import { Link } from "react-router-dom";

import HomeStyles from "./styles";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <HomeStyles>
      <Header user={user} />
      <Events />
      <Link to="/edit/new" className="fixed-new">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.13049 0H4.86962V4.86953H0V7.1304H4.86962V12H7.13049V7.1304H12V4.86953H7.13049V0Z"
          />
        </svg>
        <h2>New event...</h2>
      </Link>
      {!user && <Welcome />}
    </HomeStyles>
  );
}

export default Home;
