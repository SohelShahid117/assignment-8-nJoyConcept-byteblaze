import React from "react";
import { Link, useNavigation } from "react-router-dom";
import placeHolderImg from "../../assets/404.jpg";
import Spinner from "../Spinner/Spinner";

const SingleCard = ({ blg }) => {
  const { cover_image, description, id, published_at, title, type_of } = blg;
  console.log(blg);

  const navigate = useNavigation();
  console.log(navigate);
  console.log(navigate.state);
  if (navigate.state === "loading") return <Spinner></Spinner>;

  return (
    <Link
      //   to="/"
      to={`/blog/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto border-2 rounded-2xl p-2 hover:scale-105 transition hover:border-primary group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={blg.cover_image || placeHolderImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {blg.title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {new Date(blg.published_at).toLocaleDateString()}
        </span>
        <p>{blg.description}</p>
      </div>
    </Link>
  );
};

export default SingleCard;
