import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";
import MainLayout from "./Layout/MainLayout";
import SingleBlogCard from "./pages/SingleBlogCard";
import Content from "./Components/Content/Content";
import Author from "./Components/Author/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`),
      },
      {
        path: `/blog/:id`,
        element: <SingleBlogCard></SingleBlogCard>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
//10 min
