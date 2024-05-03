// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Home></Home>,
    // children: [
    //   {
    //     path: "/blogs",
    //     element: <Blogs></Blogs>,
    //   },
    // ],
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
    // element: <App></App>,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks></Bookmarks>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
//10 min
