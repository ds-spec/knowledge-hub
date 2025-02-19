import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#F5F6FB] overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col w-full">
        <SearchHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
