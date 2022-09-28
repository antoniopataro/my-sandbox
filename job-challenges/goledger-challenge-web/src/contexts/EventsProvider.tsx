import React, { useState, useEffect, createContext } from "react";

import { readAll, createEvent, updateEvent, deleteEvent } from "../services/api";

export interface EventProps {
  "@assetType": string;
  "@key": string;
  "@lastTouchBy": string;
  "@lastTx": string;
  date: Date;
  name: string;
  prize: number;
  winner: {
    "@assetType": string;
    "@key": string;
  };
}

interface EventsContextProps {
  events: EventProps[];
  handleCreateEvent: (name: string, date: Date, prize: number, winnerId: number) => Promise<any> | string;
  handleUpdateEvent: (name: string, date: Date, payload: { prize: number; winnerKey: string }) => Promise<any> | string;
  handleDeleteEvent: (name: string, date: Date) => Promise<any> | string;
}

export const EventsContext = createContext({} as EventsContextProps);

interface EventsProviderProps {
  children: React.ReactNode;
}

function EventsProvider({ children }: EventsProviderProps) {
  const [events, setEvents] = useState<EventProps[]>([]);

  const handleCreateEvent = async (name: string, date: Date, prize: number, winnerId: number) => {
    try {
      const response = await createEvent(name, date, prize, winnerId);

      setEvents((prevCars) => [response.data[0], ...prevCars]);

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleUpdateEvent = async (name: string, date: Date, payload: { prize: number; winnerKey: string }) => {
    try {
      const response = await updateEvent(name, date, payload);

      setEvents((prevEvents) =>
        prevEvents.map((event) => {
          if (event.name === name && event.date === date) {
            return response.data;
          }
          return event;
        }),
      );

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  const handleDeleteEvent = async (name: string, date: Date) => {
    try {
      const response = await deleteEvent(name, date);

      setEvents((prevEvents) => prevEvents.filter((event) => event.name !== name));

      return response;
    } catch (err: any) {
      return err.response.data;
    }
  };

  useEffect(() => {
    const readAllEvents = async () => {
      const allEvents = await readAll("event");

      setEvents(allEvents.data.result);
    };

    readAllEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, handleCreateEvent, handleUpdateEvent, handleDeleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export default EventsProvider;
