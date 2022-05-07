import React from "react";
import { Link } from "react-router-dom";
import style from "../modules/Header.module.css";

function Header() {
  return (
    <header>
      <div className={style.title}>
        <Link to="/">
          <h1>Le moyen coin</h1>
        </Link>
      </div>
      <div className={style.actions}>
        <Link to="/">Accueil</Link>
        <Link to="/nouvelle-annonce">Déposer une annonce</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </header>
  );
}

export default Header;
