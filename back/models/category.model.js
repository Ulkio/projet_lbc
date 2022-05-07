import pool from "../config/database/db.js";

class Category {
  static async getCategories(q) {
    const [query] = await pool.execute(q);
    return query;
  }
}
export default Category;
