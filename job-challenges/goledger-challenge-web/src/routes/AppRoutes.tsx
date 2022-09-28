import Home from "../pages/Home";
import Event from "../pages/Event";
import EditEvent from "../pages/EditEvent";
import EditTeam from "../pages/EditTeam";
import EditDriver from "../pages/EditDriver";
import EditCar from "../pages/EditCar";
import Team from "../pages/Team";
import Driver from "../pages/Driver";
import NotFound from "../pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:eventKey/:section" element={<Event />} />
        <Route path="/edit/:eventKey" element={<EditEvent />} />
        <Route path="/:eventKey/teams/edit/:teamId" element={<EditTeam />} />
        <Route path="/:eventKey/drivers/edit/:driverId" element={<EditDriver />} />
        <Route path="/:eventKey/cars/edit/:carKey" element={<EditCar />} />
        <Route path="/team/:teamId" element={<Team />} />
        <Route path="/driver/:driverId" element={<Driver />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
