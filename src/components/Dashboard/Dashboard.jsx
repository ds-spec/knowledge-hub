import React from "react";
import TrendingArticles from "./Articles/TrendingArticles";

const Dashboard = () => {
  return (
    <div className="px-8 py-15 flex flex-col gap-11">
      <div className="flex flex-col justify-center gap-3">
        <h1 className="text-5xl font-roboto-medium">Hi, Yana</h1>
        <p className="font-roboto-medium">
          Ready to dive into your knowledge today?
        </p>
      </div>
      <TrendingArticles />
    </div>
  );
};

export default Dashboard;
