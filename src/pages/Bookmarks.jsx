import React, { useEffect, useState } from "react";
import { getBlogs } from "../Utility/Utility";
import SingleCard from "../Components/SingleCard/SingleCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    console.log(storedBlogs);
    setBlogs(storedBlogs);
  }, []);
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-12 py-8">
      {blogs.map((blg) => (
        <SingleCard key={blg.id} blg={blg}></SingleCard>
      ))}
    </div>
  );
};

export default Bookmarks;
