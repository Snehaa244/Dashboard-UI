import React from "react";
import Tabs from "./Tabs";
import CoordinatorAssignment from "./CoordinatorAssignment";
import ContractorAssignment from "./ContractorAssignment";
import EventInfo from "./EventInfo";
import PositionsTable from "./PositionsTable";
import SaveButton from "./SaveButton";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Tabs Section */}
      <Tabs />

      {/* Row 1: CoordinatorAssignment + EventInfo */}
      <div className="mt-6 flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-1/2">
          <CoordinatorAssignment />
        </div>
        <div className="w-full md:w-1/2">
          <EventInfo />
        </div>
      </div>

      {/* Row 2: ContractorAssignment + PositionsTable */}
      <div className="mt-6 flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-2/5">
          <ContractorAssignment />
        </div>
        <div className="w-full md:w-3/5">
          <PositionsTable />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-center">
        <SaveButton />
      </div>
    </div>
  );
};

export default Dashboard;
