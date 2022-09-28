import ToastProvider from "./ToastProvider";
import UserProvider from "./UserProvider";
import EventsProvider from "./EventsProvider";
import TeamsProvider from "./TeamsProvider";
import DriversProvider from "./DriversProvider";
import CarsProvider from "./CarsProvider";

interface ContextProviderProps {
  children: React.ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ToastProvider>
      <UserProvider>
        <EventsProvider>
          <TeamsProvider>
            <DriversProvider>
              <CarsProvider>{children}</CarsProvider>
            </DriversProvider>
          </TeamsProvider>
        </EventsProvider>
      </UserProvider>
    </ToastProvider>
  );
}

export default ContextProvider;
