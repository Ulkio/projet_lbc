import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnnoncesByCategory } from "../api";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import style from "../modules/AnnoncesByCategory.module.css";

function AnnoncesByCategory() {
  const [annonces, setAnnonces] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axiosGetAnnoncesByCategory();
  }, [category]);

  const axiosGetAnnoncesByCategory = async () => {
    const { annonce } = await getAnnoncesByCategory(category);
    setAnnonces(annonce);
  };
  return (
    <main>
      <Categories />
      <section className={style.container}>
        {annonces.map((annonce) => {
          return (
            <article key={annonce.id_annonce}>
              <Link to={"/annonce/" + annonce.id_annonce}>
                <h2>{annonce.title}</h2>
                <p>{annonce.description.substr(0, 100)} (...)</p>
                <p>{annonce.price} €</p>
                <hr />
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default AnnoncesByCategory;
