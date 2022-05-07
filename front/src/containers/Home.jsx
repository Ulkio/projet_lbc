import React from "react";
import Categories from "../components/Categories";
import style from "../modules/Home.module.css";

function Home() {
  return (
    <main>
      <h1 className={style.title}>Bienvenue, sélectionnez une catégorie</h1>
      <Categories />
    </main>
  );
}

export default Home;
