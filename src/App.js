import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";

import "./App.css";

function app() {
  return (
    <>
      <Header />

      <div className="corpo">
        <PostList />
      </div>
    </>
  );
}

export default app;
