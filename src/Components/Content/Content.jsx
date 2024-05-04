import React from "react";
import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../../assets/404.jpg";
import SingleCard from "../SingleCard/SingleCard";
import Tag from "../Tag/Tag";

const Content = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" mx-auto border-2 rounded-2xl p-2  group focus:no-underline dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={data.cover_image || placeHolderImg}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {data.tags.map((tag, index) => (
          <Tag tag={tag} key={index}></Tag>
        ))}
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {data.title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {new Date(data.published_at).toLocaleDateString()}
        </span>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Content;
