import React, { useEffect, useContext } from "react";

import Header from "../../components/EditTeam/Header";

import { TeamProps, TeamsContext } from "../../contexts/TeamsProvider";

import { useNavigate, useLocation } from "react-router-dom";

import EditTeamStyles from "./styles";

function EditTeam() {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  const { teams } = useContext(TeamsContext);

  const team: TeamProps | any = state;

  useEffect(() => {
    const teamsIds = teams.map((team) => team.id);

    const section = pathname.split("/")[pathname.split("/").length - 1];

    if (!teamsIds.includes(team?.id) && section !== "new") {
      navigate("/not-found");
    }
  }, []);

  return (
    <EditTeamStyles>
      <Header teamId={team?.id} defaultName={team?.name} />
    </EditTeamStyles>
  );
}

export default EditTeam;
