import db from '../models/db';
import Helper from './Helper';

class User { 
  /**
   * Create A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} parcel object 
   */
  async create(data) {    
    const createQuery = `INSERT INTO
      users("firstname", "lastname", "othernames", "email", "username", "isAdmin", "password")
      VALUES($1, $2, $3, $4, $5, $6, $7)
      returning *`;
    const values = [
      data.firstname,
      data.lastname,
      data.othernames,
      data.email,
      data.username,
      data.isAdmin,
      data.password,
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      // const token = Helper.generateToken(rows[0].id);
      return rows[0];
    } catch(error) {
      // console.log(error);
      return error;
    }
  }

  /**
   * Get A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} parcel object
   */
  async getById(id) {
    const text = 'SELECT * FROM users WHERE id = $1';
    try {
      const { rows } = await db.query(text, [id]);
      return rows[0];
    } catch(error) {
      return error;
    }
  }

  /**
   * Get A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} parcel object
   */
  async getByEmail(email) {
    const text = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(text, [email]);
      return rows[0];
    } catch(error) {
      return error;
    }
  }

  /**
   * Get A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} parcel object
   */
  async getByPassword(password) {
    const text = 'SELECT * FROM users WHERE password = $1';
    try {
      const { rows } = await db.query(text, [password]);
      return rows[0];
    } catch(error) {
      return error;
    }
  }
}
 
export default User;
