import Toast from "./components/Toast";

import ContextProvider from "./contexts/ContextProvider";

import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
      <Toast />
    </ContextProvider>
  );
}

export default App;
