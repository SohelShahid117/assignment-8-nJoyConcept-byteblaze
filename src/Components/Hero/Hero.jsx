import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 max-w-[80%] mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
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
          <button className="btn btn-primary">Read Blogs</button>
          <button className="btn btn-primary">BookMarks</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
