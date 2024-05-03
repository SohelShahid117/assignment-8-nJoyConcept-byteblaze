import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-200 max-w-[80%] mx-auto my-20 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse px-20">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Read Blogs</button>
          <button className="btn btn-primary">BookMarks</button> */}
          <div className="flex  justify-center gap-3">
            <Link to="/blogs" className="btn btn-primary">
              Read Blogs
            </Link>
            <Link to="/bookmarks" className="btn btn-secondary">
              Bookmarks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
