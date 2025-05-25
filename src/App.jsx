import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./Components/MainLayout";

// Pages / Components
import Dashboard from "./Components/Dashboard";
import CoordinatorAssignment from "./Components/CoordinatorAssignment";
import ContractorAssignment from "./Components/ContractorAssignment";
import EventInfo from "./Components/EventInfo";
import PositionsTable from "./Components/PositionsTable";
import SaveButton from "./Components/SaveButton";
import EventRequestTable from "./Components/EventRequestTable";
import MeetingRoomCalendar from "./Components/MeetingRoomCard";
import Tabs from "./Components/Tabs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Individual Routes */}
          <Route path="coordinator" element={<CoordinatorAssignment />} />
          <Route path="contractor" element={<ContractorAssignment />} />
          <Route path="event" element={<EventInfo />} />
          <Route path="positions" element={<PositionsTable />} />
          <Route path="save" element={<SaveButton />} />
          <Route path="requests" element={<EventRequestTable />} />
          <Route path="calendar" element={<MeetingRoomCalendar />} />
          <Route path="tabs" element={<Tabs />} />
          
          {/* Add other routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
