import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAnnonceById } from "../api";
import style from "../modules/Annonce.module.css";

function Annonce() {
  const { id } = useParams();
  const [stateAnnonce, setStateAnnonce] = useState({});
  useEffect(() => {
    axiosGetAnnonceById();
  }, [id]);

  const axiosGetAnnonceById = async () => {
    const { annonce } = await getAnnonceById(id);
    console.log(annonce[0]);
    setStateAnnonce(annonce[0]);
  };
  return (
    <main className={style.main}>
      <Link to={"/annonces/" + stateAnnonce.name_category}>
        <button className={style.back}>
          <img src="/images/arrow-left.svg" alt="back" />
        </button>
      </Link>

      <h1 className={style.title}>{stateAnnonce.title}</h1>
      {/* <img src="" alt="" srcset="" /> */}
      <p className={style.description}>{stateAnnonce.description}</p>

      {stateAnnonce.type === "vente" && (
        <p className={style.vente}>
          Vendu par {stateAnnonce.name_user} pour {stateAnnonce.price} €
        </p>
      )}

      <p>Annonce créée le {new Date(stateAnnonce.creation_date).toLocaleString()}</p>
      {stateAnnonce.update_date !== null && stateAnnonce.creation_date !== stateAnnonce.update_date && (
        <p>Annonce modifiée le {new Date(stateAnnonce.update_date).toLocaleString()}</p>
      )}
    </main>
  );
}

export default Annonce;
