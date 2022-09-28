import React, { useState, useEffect, createContext } from "react";

import { readAll, createTeam, updateTeam, deleteTeam } from "../services/api";

export interface TeamProps {
  "@assetType": string;
  "@key": string;
  "@lastTouchBy": string;
  "@lastTx": string;
  id: number;
  name: string;
}

interface TeamsContextProps {
  teams: TeamProps[];
  handleCreateTeam: (name: string, id: number) => Promise<any> | string;
  handleUpdateTeam: (id: number, payload: { name: string }) => Promise<any> | string;
  handleDeleteTeam: (id: number) => Promise<any> | string;
}

export const TeamsContext = createContext({} as TeamsContextProps);

interface TeamsProviderProps {
  children: React.ReactNode;
}

function TeamsProvider({ children }: TeamsProviderProps) {
  const [teams, setTeams] = useState<TeamProps[]>([]);

  const handleCreateTeam = async (name: string, id: number) => {
    try {
      const response = await createTeam(name, id);

      setTeams((prevTeams) => [response.data[0], ...prevTeams]);

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleUpdateTeam = async (id: number, payload: { name: string }) => {
    try {
      const response = await updateTeam(id, payload);

      setTeams((prevTeams) =>
        prevTeams.map((team) => {
          if (team.id === id) {
            return response.data;
          }
          return team;
        }),
      );

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleDeleteTeam = async (id: number) => {
    try {
      const response = await deleteTeam(id);

      setTeams((prevTeams) => prevTeams.filter((team) => team.id !== id));

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  useEffect(() => {
    const readAllTeams = async () => {
      const allTeams = await readAll("team");

      setTeams(allTeams.data.result);
    };

    readAllTeams();
  }, []);

  return (
    <TeamsContext.Provider value={{ teams, handleCreateTeam, handleUpdateTeam, handleDeleteTeam }}>
      {children}
    </TeamsContext.Provider>
  );
}

export default TeamsProvider;
