import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchHeader from "./components/SearchHeader/SearchHeader";

const App = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#F5F6FB] overflow-x-hidden">
      <Navbar />
      <SearchHeader />
    </div>
  );
};

export default App;
