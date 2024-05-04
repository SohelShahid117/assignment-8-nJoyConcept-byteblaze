import React from "react";

const Tag = ({ tag }) => {
  console.log(tag);
  return (
    <div>
      <a
        rel="noopener noreferrer"
        href="#"
        className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
      >
        #{tag}
      </a>
    </div>
  );
};

export default Tag;
