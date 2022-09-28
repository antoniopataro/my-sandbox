import React, { createContext, useEffect, useState } from "react";

import { readAll, createCar, updateCar, deleteCar } from "../services/api";

import { AxiosResponse, AxiosError, Axios } from "axios";

export interface CarProps {
  "@assetType": string;
  "@key": string;
  "@lastTouchBy": string;
  "@lastTx": string;
  id: number;
  model: string;
  driver: {
    "@assetType": string;
    "@key": string;
  };
}

interface CarsContextProps {
  cars: CarProps[];
  handleCreateCar: (model: string, id: number, driverId: number) => Promise<AxiosResponse<any, any>> | string;
  handleUpdateCar: (id: number, payload: { model: string; driverKey: string }) => Promise<any> | string;
  handleDeleteCar: (id: number) => Promise<AxiosResponse<any, any>> | string;
}

export const CarsContext = createContext({} as CarsContextProps);

interface CarsProvider {
  children: React.ReactNode;
}

function CarsProvider({ children }: CarsProvider) {
  const [cars, setCars] = useState<CarProps[]>([]);

  const handleCreateCar = async (model: string, id: number, driverId: number) => {
    try {
      const response = await createCar(model, id, driverId);

      setCars((prevCars) => [response.data[0], ...prevCars]);

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleUpdateCar = async (id: number, payload: { model: string; driverKey: string }) => {
    try {
      const response = await updateCar(id, payload);

      setCars((prevCars) =>
        prevCars.map((car) => {
          if (car.id === id) {
            return response.data;
          }
          return car;
        }),
      );

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleDeleteCar = async (id: number) => {
    try {
      const response = await deleteCar(id);

      setCars((prevCars) => prevCars.filter((car) => car.id !== id));

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  useEffect(() => {
    const readAllCars = async () => {
      const allCars = await readAll("car");

      setCars(allCars.data.result);
    };

    readAllCars();
  }, []);

  return (
    <CarsContext.Provider value={{ cars, handleCreateCar, handleUpdateCar, handleDeleteCar }}>
      {children}
    </CarsContext.Provider>
  );
}

export default CarsProvider;
