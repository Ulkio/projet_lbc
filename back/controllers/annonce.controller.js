import Annonce from "../models/annonce.model.js";

export const getAnnonces = async (req, res, next) => {
  const query = `SELECT * FROM annonce
    INNER JOIN category ON category.id_category = annonce.id_category
    INNER JOIN user ON user.id_user = annonce.id_user`;

  try {
    const data = await Annonce.getAnnonces(query);
    return res.json({
      annonces: data,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const getAnnonceById = async (req, res, next) => {
  const id = req.params.id;
  const query = `SELECT * FROM annonce
      INNER JOIN category ON category.id_category = annonce.id_category
      INNER JOIN user ON user.id_user = annonce.id_user
      WHERE id_annonce = ?`;

  try {
    const data = await Annonce.getAnnoncesByValue(query, id);
    return res.json({
      annonce: data,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const getAnnoncesByCategory = async (req, res, next) => {
  const name = req.params.name;
  const query = `SELECT * FROM annonce
    INNER JOIN category ON category.id_category = annonce.id_category
    INNER JOIN user ON user.id_user = annonce.id_user
    WHERE category.name_category = ?`;

  try {
    const data = await Annonce.getAnnoncesByValue(query, name);
    return res.json({
      annonce: data,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const addAnnonce = async (req, res, next) => {
  const datas = {};
  for (const key in req.body) {
    datas[key] = req.body[key];
  }

  const query = `INSERT INTO annonce
      (title,description,image,creation_date,type,price,id_category,id_user)
      VALUES
      (?,?,?,NOW(),?,?,?,?)`;

  try {
    const result = await Annonce.save(query, datas);

    return res.json({
      result: result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const updateAnnonce = async (req, res, next) => {
  const datas = {};

  for (const key in req.body) {
    datas[key] = req.body[key];
  }
  datas.id = req.params.id;

  const query = `UPDATE annonce
    SET title = ?, description = ?, image = ?, type = ?, price = ?, update_date = NOW(), id_category = ?, id_user = ?
    WHERE id_annonce = ?`;

  try {
    const result = await Annonce.save(query, datas);
    return res.json({
      result: result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const deleteAnnonce = async (req, res, next) => {
  const id = req.params.id;
  const query = `DELETE FROM annonce WHERE id_annonce = ?`;

  try {
    const result = await Annonce.delete(query, id);
    return res.json({
      result: result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
