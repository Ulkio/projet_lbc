import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAnnonceById } from "../api";
import style from "../modules/Annonce.module.css";
import { baseURL } from "../api/config";

function Annonce() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState({});

  useEffect(() => {
    axiosGetAnnonceById();
  }, [id]);

  const axiosGetAnnonceById = async () => {
    const { annonce } = await getAnnonceById(id);
    setAnnonce(annonce[0]);
  };
  return (
    <main className={style.main}>
      <Link to={"/annonces/" + annonce.name_category}>
        <button className={style.back}>
          <img src="/images/arrow-left.svg" alt="back" />
        </button>
      </Link>

      <h1 className={style.title}>{annonce.title}</h1>

      {annonce.image ? <img className={style.image} src={`${baseURL}/images/${annonce.image}`} alt="image" /> : <p>Pas d'image</p>}
      
      <p className={style.description}>{annonce.description}</p>

      {annonce.type === "vente" && (
        <p className={style.vente}>
          Vendu par <span className={style.userprice}>{annonce.name_user}</span> pour <span className={style.userprice}>{annonce.price}</span> €
        </p>
      )}

      <p>Annonce créée le {new Date(annonce.creation_date).toLocaleString()}</p>
      {annonce.update_date !== null && annonce.creation_date !== annonce.update_date && (
        <p>Annonce modifiée le {new Date(annonce.update_date).toLocaleString()}</p>
      )}
    </main>
  );
}

export default Annonce;
