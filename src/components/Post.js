import React from "react";
import Comment from "./Comment";
import profile from '../assets/profile2.png'
import "./Post.css"
function post({ data }) {
  return (
    <div className="container-post">
      <div className="header-post">
        <img src={profile} alt="Foto" />
        <div className="dados">
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>
      </div>
      <div className="corpo">
        <p>{data.content}</p>
      </div>
      {
        data.comments.map(comment => (
          <Comment key={comment.id} data={comment}/>
        ))
      }
      
      
    </div>
  );
}

export default post;
