import React, { useState, useEffect, createContext } from "react";

import { readAll, createDriver, updateDriver, deleteDriver } from "../services/api";

import { AxiosResponse } from "axios";

export interface DriverProps {
  "@assetType": string;
  "@key": string;
  "@lastTouchBy": string;
  "@lastTx": string;
  id: number;
  name: string;
  team: {
    "@assetType": string;
    "@key": string;
  };
}

interface DriversContextProps {
  drivers: DriverProps[];
  handleCreateDriver: (name: string, id: number, teamId: number) => Promise<any> | string;
  handleUpdateDriver: (id: number, payload: { name: string; teamKey: string }) => Promise<any> | string;
  handleDeleteDriver: (id: number) => Promise<AxiosResponse<any, any>> | string;
}

export const DriversContext = createContext({} as DriversContextProps);

interface DriverProviderProps {
  children: React.ReactNode;
}

function DriverProvider({ children }: DriverProviderProps) {
  const [drivers, setDrivers] = useState<DriverProps[]>([]);

  const handleCreateDriver = async (name: string, id: number, teamId: number) => {
    try {
      const response = await createDriver(name, id, teamId);

      setDrivers((prevCars) => [response.data[0], ...prevCars]);

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleUpdateDriver = async (id: number, payload: { name: string; teamKey: string }) => {
    try {
      const response = await updateDriver(id, payload);

      setDrivers((prevDrivers) =>
        prevDrivers.map((driver) => {
          if (driver.id === id) {
            return response.data;
          }
          return driver;
        }),
      );

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleDeleteDriver = async (id: number) => {
    try {
      const response = await deleteDriver(id);

      setDrivers((prevDrivers) => prevDrivers.filter((driver) => driver.id !== id));

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  useEffect(() => {
    const readAllDrivers = async () => {
      const allDrivers = await readAll("driver");

      setDrivers(allDrivers.data.result);
    };

    readAllDrivers();
  }, []);

  return (
    <DriversContext.Provider value={{ drivers, handleCreateDriver, handleUpdateDriver, handleDeleteDriver }}>
      {children}
    </DriversContext.Provider>
  );
}

export default DriverProvider;
