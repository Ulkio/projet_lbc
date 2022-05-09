import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "../modules/CreateAnnonce.module.css";

import { getCategories, postAnnonce, postImage, getAnnonceById, editAnnonce } from "../api";

function AnnonceForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    type: "vente",
    price: 0,
    idCategory: 1,
    idUser: 1,
  });

  if (id) {
  }
  useEffect(() => {
    axiosGetCategories();
    if (id) {
      axiosGetAnnonceById(id);
    }
  }, []);

  const axiosGetCategories = async () => {
    const { categories } = await getCategories();
    setCategories(categories);
  };

  const axiosGetAnnonceById = async (id) => {
    const { annonce } = await getAnnonceById(id);
    setFormData({
      title: annonce[0].title,
      description: annonce[0].description,
      image: annonce[0].image,
      type: annonce[0].type,
      price: annonce[0].price,
      idCategory: annonce[0].id_category,
      idUser: annonce[0].id_user,
    });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("fileName", image.name);
    try {
      await postImage(data);
    } catch (error) {
      console.log(error);
    }
    await postAnnonce(formData);
    navigate("/");
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("fileName", image.name);
    try {
      await postImage(data);
    } catch (error) {
      console.log(error);
    }
    await editAnnonce(formData, id);
    navigate("/admin");
  };

  const handleInputChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    if (target.name === "idCategory" || target.name === "price") {
      value = parseInt(value);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputFile = (e) => {
    setImage(e.target.files[0]);
    setFormData({
      ...formData,
      image: e.target.files[0].name || "",
    });
  };

  const displayAddForm = () => {
    return (
      <form onSubmit={(e) => handleSubmitPost(e)} className={style.form}>
        <input value={formData.title} onChange={(e) => handleInputChange(e)} type="text" name="title" placeholder="Titre de l'annonce" />
        <input onChange={(e) => handleInputFile(e)} type="file" name="image" />
        <select value={formData.type} onChange={(e) => handleInputChange(e)} name="type" id="type">
          <option value="vente">vente</option>
          <option value="échange">échange</option>
        </select>
        <input value={formData.price} onChange={(e) => handleInputChange(e)} type="text" name="price" placeholder="Prix" />
        <select value={formData.idCategory} onChange={(e) => handleInputChange(e)} name="idCategory" id="category">
          {categories.map((cat) => {
            return (
              <option key={cat.id_category} value={cat.id_category}>
                {cat.name_category}
              </option>
            );
          })}
        </select>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange(e)}
          name="description"
          id="description"
          cols="50"
          rows="5"
          placeholder="Description"></textarea>
        <input type="submit" value="Valider" />
      </form>
    );
  };
  const displayUpdateForm = () => {
    return (
      <form onSubmit={(e) => handleSubmitEdit(e)} className={style.form}>
        <input value={formData.title} onChange={(e) => handleInputChange(e)} type="text" name="title" placeholder="Titre de l'annonce" />
        <input onChange={(e) => handleInputFile(e)} type="file" name="image" />
        <select value={formData.type} onChange={(e) => handleInputChange(e)} name="type" id="type">
          <option value="vente">vente</option>
          <option value="échange">échange</option>
        </select>
        <input value={formData.price || 0} onChange={(e) => handleInputChange(e)} type="text" name="price" placeholder="Prix" />
        <select value={formData.idCategory} onChange={(e) => handleInputChange(e)} name="idCategory" id="category">
          {categories.map((cat) => {
            return (
              <option key={cat.id_category} value={cat.id_category}>
                {cat.name_category}
              </option>
            );
          })}
        </select>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange(e)}
          name="description"
          id="description"
          cols="50"
          rows="5"
          placeholder="Description"></textarea>
        <input type="submit" value="Valider" />
      </form>
    );
  };
  return <section> {id ? displayUpdateForm() : displayAddForm()}</section>;
}

export default AnnonceForm;
