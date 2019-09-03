import React from "react";
import './Comment.css'
import profile from '../assets/profile.png'
function comment({data}) {
  return (
    <div className='container-comment'>
      <img src={profile} alt="Foto" />
      <p>
        <strong>{data.author.name} </strong>{data.content} 
      </p>
    </div>
  );
}

export default comment;
