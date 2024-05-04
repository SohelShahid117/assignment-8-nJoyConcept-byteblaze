import React from "react";
import { useLoaderData } from "react-router-dom";

const Author = () => {
  const data = useLoaderData();
  return (
    <div>
      <h3>{data.description}</h3>
    </div>
  );
};

export default Author;
