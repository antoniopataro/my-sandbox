import React, { useState, useEffect, useContext } from "react";

import Card from "../Card";

import { TeamsContext } from "../../../contexts/TeamsProvider";

import { Link } from "react-router-dom";

import FormStyles from "./styles";

interface FormProps {
  setTeamId: React.Dispatch<React.SetStateAction<number>>;
  teamKey: string;
}

function Form({ teamKey, setTeamId }: FormProps) {
  const { teams } = useContext(TeamsContext);

  const team = teams.find((team) => team["@key"] === teamKey);

  const [checked, setChecked] = useState(team?.id.toString()!);

  useEffect(() => {
    setTeamId(Number(checked));
  }, [checked]);

  return (
    <FormStyles>
      {teams.length === 0 ? (
        <h2>
          <span style={{ fontSize: "20px" }}>🏆</span> There are no teams.
        </h2>
      ) : (
        <h2>
          <span style={{ fontSize: "20px" }}>🏆</span> Driver's team:
        </h2>
      )}
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Card name={team.name} id={team.id} checked={checked} setChecked={setChecked} />
          </li>
        ))}
      </ul>
      <Link to={`/newEvent/teams/edit/new`} className="new-asset-link">
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.13049 0H4.86962V4.86953H0V7.1304H4.86962V12H7.13049V7.1304H12V4.86953H7.13049V0Z"
          />
        </svg>
        <h2>New team...</h2>
      </Link>
    </FormStyles>
  );
}

export default Form;
