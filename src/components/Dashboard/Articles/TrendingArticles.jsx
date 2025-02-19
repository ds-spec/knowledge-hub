import React from "react";
import InfoCards from "./InfoCards";

const TrendingArticles = () => {
  const trendingarticles = [
    {
      id: "1",
      tag: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1641484404410-684c804c2f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Future of UI/UX: What Will Dominate 2025?",
      description:
        "Here's a more detailed explanation of the top UI/UX trends for 2025",
      author: "Daniel Norman",
    },
    {
      id: "2",
      tag: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Building Performant Web Applications in 2025",
      description:
        "A comprehensive guide to modern performance optimization techniques",
      author: "Sarah Chen",
    },
    {
      id: "3",
      tag: "AI Integration",
      image:
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Integrating AI Assistants into Product Design",
      description:
        "How to effectively incorporate AI assistants into your product design workflow",
      author: "Marcus Johnson",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="font-roboto-medium text-2xl">Trending Articles</h3>
        <h3 className="font-roboto-medium text-base cursor-pointer">
          View all
        </h3>
      </div>
      <div className="flex items-center justify-between">
        {trendingarticles?.map((item) => (
          <InfoCards card={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;
