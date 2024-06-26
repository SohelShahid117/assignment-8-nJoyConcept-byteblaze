import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Tag from "../Components/Tag/Tag";
import { CiBookmarkPlus } from "react-icons/ci";
import { saveBlogs } from "../Utility/Utility";

const SingleBlogCard = () => {
  const data = useLoaderData();
  console.log(data);
  console.log(data.tags);

  const [tabIndex, setTabIndex] = useState(0);

  const handleBookmark = (data) => {
    console.log(data);
    saveBlogs(data);
  };

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {data.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img
                src={data.cover_image}
                alt=""
                className="w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
              />
              <p className="text-sm">
                {/* <span>{data.flare_tag.name}</span> • */}Sohel .
                <span>{new Date(data.published_at).toLocaleDateString()}</span>{" "}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              <span>{data.reading_time_minutes}</span> min read •{" "}
              <span>comments_count:{data.comments_count}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Content</span>
          </Link>
          <Link
            to={`author`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Author</span>
          </Link>
          <div onClick={() => handleBookmark(data)}>
            <CiBookmarkPlus className="text-primary bg-secondary w-10 h-10 rounded-full ml-5" />
          </div>
        </div>
        <div>
          <Outlet></Outlet>
        </div>

        <div className="dark:text-gray-800">
          <p>{data.description}</p>
        </div>
      </article>
      <div>
        {/* <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {data.tags.map((tag, index) => (
            <Tag tag={tag} key={index}></Tag>
          ))}
        </div> */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;

//part-4-15min
