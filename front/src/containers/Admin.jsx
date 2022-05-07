import React, { useState, useEffect } from "react";
import { getAnnonces, deleteAnnonce } from "../api";
import { Link } from "react-router-dom";
import style from "../modules/Admin.module.css";

function Admin() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    axiosGetAnnonces();
  }, []);

  const axiosGetAnnonces = async () => {
    const { annonces } = await getAnnonces();
    setAnnonces(annonces);
  };

  const handleDeleteButton = async (id) => {
    await deleteAnnonce(id);
    const { annonces } = await getAnnonces();
    setAnnonces(annonces);
  };

  
  return (
    <main className={style.container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Catégorie</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Vendeur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {annonces.map((ann) => {
            return (
              <tr key={ann.id_annonce}>
                <td>
                  <Link to={"/annonce/" + ann.id_annonce}>{ann.id_annonce}</Link>
                </td>
                <td>{ann.name_category.toUpperCase()}</td>
                <td>{ann.title}</td>
                <td>{ann.description.substr(0, 50) + "..."}</td>
                <td>{ann.type}</td>
                <td>{ann.price}</td>
                <td>{ann.name_user}</td>
                <td>
                  <button onClick={() => handleDeleteButton(ann.id_annonce)} className={style.btn}>
                    <img src="/images/delete.svg" alt="delete" title="Supprimer" />
                  </button>
                  <button className={style.btn}>
                    <Link to={"/modifier-annonce/" + ann.id_annonce}>
                      {" "}
                      <img src="/images/edit.svg" alt="edit" title="Editer" />{" "}
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default Admin;
