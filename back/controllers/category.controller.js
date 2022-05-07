import Category from "../models/category.model.js";

export const getCategories = async (req, res, next) => {
  const query = `SELECT * FROM category`;
  try {
    const result = await Category.getCategories(query);
    return res.json({
      categories: result,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
