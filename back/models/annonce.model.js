import pool from "../config/database/db.js";

class Annonce {
  static async getAnnonces(q) {
    const [query] = await pool.execute(q);
    return query;
  }

  static async getAnnoncesByValue(q, val) {
    const [query] = await pool.execute(q, [val]);
    return query;
  }

  static async save(q, datas) {
    const [query] = await pool.execute(q, [...Object.values(datas)]);
    return query;
  }

  static async delete(q, id) {
    const [query] = await pool.execute(q, [id]);
    return query;
  }
}
export default Annonce;
