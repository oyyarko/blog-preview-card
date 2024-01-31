import React from "react";
import articleBg from "assets/illustration-article.svg";
import avatar from "assets/image-avatar.webp";

const App = () => {
  return (
    <div className="bg-primary font-figtree min-h-screen flex items-center justify-center max-sm:p-4">
      <div className="bg-white p-3 border rounded-2xl shadow-black shadow-[7px_7px_0px_0px_rgba(109,40,217)] max-w-sm">
        <img src={articleBg} alt="Article" className="rounded-xl w-full" />
        <div className="w-1/4 max-sm:w-1/3">
          <h2 className="bg-primary text-black font-bold w-full rounded my-2 px-2 text-center">
            Learning
          </h2>
        </div>
        <div className="text-sm text-black">Published 21 Dec, 2023</div>
        <h1 className="font-extrabold my-2 text-xl">HTML & CSS Foundations</h1>
        <p className="text-gray">
          These Languages are the backbone of every website, defining structure,
          content and presentation!
        </p>
        <div className="py-3 flex gap-3">
          <img
            src={avatar}
            width={40}
            height={40}
            alt="Avatar"
            className="rounded-full"
          />
          <h3 className="font-extrabold my-2">Jackie Chan</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
