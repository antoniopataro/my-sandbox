import React, { useEffect, useContext } from "react";

import Header from "../../components/Team/Header";
import Drivers from "../../components/Team/Drivers";

import { TeamProps, TeamsContext } from "../../contexts/TeamsProvider";

import { useNavigate, useLocation } from "react-router-dom";

import TeamStyles from "./styles";

function Team() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { teams } = useContext(TeamsContext);

  const { event, team }: TeamProps | any = state;

  useEffect(() => {
    const teamsIds = teams.map((team) => team.id);

    if (!teamsIds.includes(team?.id)) {
      navigate("/not-found");
    }
  }, []);

  return (
    <TeamStyles>
      <Header teamName={team?.name} />
      <Drivers event={event} teamKey={team ? team["@key"] : ""} />
    </TeamStyles>
  );
}

export default Team;
