import React, { useState, useEffect, useContext } from "react";

import Card from "../Card";

import { TeamsContext } from "../../../contexts/TeamsProvider";

import { Link } from "react-router-dom";

import FormStyles from "./styles";

interface FormProps {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setPrize: React.Dispatch<React.SetStateAction<number>>;
  setWinnerKey: React.Dispatch<React.SetStateAction<string>>;
  defaultDate: Date;
  prize: number;
  winnerKey: string;
}

function Form({ setDate, setPrize, setWinnerKey, defaultDate, winnerKey, prize }: FormProps) {
  const { teams } = useContext(TeamsContext);

  const team = teams.find((team) => team["@key"] === winnerKey);

  const [checked, setChecked] = useState(team?.id.toString()!);
  const [formattedDefaultDate, setFormattedDefaultDate] = useState("");

  useEffect(() => {
    const winner = teams.find((team) => team.id === Number(checked));

    setWinnerKey(winner?.["@key"]!);
  }, [checked]);

  useEffect(() => {
    const date = new Date(defaultDate);

    const dayString = date.getDate().toString();
    const monthString = (date.getMonth() + 1).toString();
    const yearString = date.getFullYear().toString();

    const day = dayString.length === 1 ? "0" + dayString : dayString;
    const month = monthString.length === 1 ? "0" + monthString : monthString;
    const year = yearString;

    setFormattedDefaultDate(`${year}-${month}-${day}`);
  }, []);

  return (
    <FormStyles>
      <form action="">
        <input
          type="number"
          placeholder="Prize..."
          defaultValue={prize}
          onChange={(e) => setPrize(Number(e.target.value))}
        />
        {!defaultDate && (
          <input
            type="date"
            placeholder="Prize..."
            defaultValue={defaultDate ? formattedDefaultDate : ""}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        )}
      </form>

      <section>
        {teams.length === 0 ? (
          <h2>
            <span style={{ fontSize: "20px" }}>🏆</span> There are no teams.
          </h2>
        ) : (
          <h2>
            <span style={{ fontSize: "20px" }}>🏆</span> Winner:
          </h2>
        )}
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
              <Card name={team.name} id={team.id} checked={checked} setChecked={setChecked} />
            </li>
          ))}
        </ul>
      </section>

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
