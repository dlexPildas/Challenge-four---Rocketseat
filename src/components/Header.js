import React from "react";
import "./Header.css";
import logo from '../assets/profile.png'
function header() {
  return (
    <header>
      <h1>Facebook</h1>

      <div id="box">
        <h5>Meu perfil</h5>
        <img src={logo} alt="Foto" />
      </div>
    </header>
  );
}

export default header;
