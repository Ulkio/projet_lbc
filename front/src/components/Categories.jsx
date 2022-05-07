import React, { useState, useEffect } from "react";
import { getCategories, getAnnoncesByCategory } from "../api/index";
import { Link } from "react-router-dom";

import style from "../modules/Categories.module.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosGetCategories();
  }, []);

  const axiosGetCategories = async () => {
    const { categories } = await getCategories();
    setCategories(categories);
  };
  return (
    <div className={style.selectCategory}>
      {categories.map((cat) => {
        return (
          <Link key={cat.id_category} to={"/annonces/" + cat.name_category}>
            {cat.name_category}
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
