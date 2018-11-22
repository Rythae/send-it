import db from './db';

export default class Parcel {
  /**
   * Create Parcel
   * @param {object} req 
   * @param {object} res
   * @returns {object} parcel object 
   */
  async create(data) {
    const text = `INSERT INTO
      parcels("placedBy", "weight", "weightMetric", "status", "to", "from", "currentLocation")
      VALUES($1, $2, $3, $4, $5, $6, $7)
      returning *`;

    const values = [
      data.placedBy,
      data.weight,
      data.weightMetric,
      data.status,
      data.to,
      data.from,
      data.currentLocation,
    ];

    try {
      const { rows } = await db.query(text, values);
      return rows[0];
    } catch(error) {
      console.log(error);
      return error;
    };
  }
  /**
   * Get All Parcels
   * @param {object} req 
   * @param {object} res 
   * @returns {object} parcels array
   */
  async getAll() {
    const findAllQuery = 'SELECT * FROM parcels';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return rows;
    } catch(error) {
      return error;
    }
  }
  /**
   * Get A Parcel
   * @param {object} req 
   * @param {object} res
   * @returns {object} parcel object
   */
  async getOne(id) {
    const text = 'SELECT * FROM parcels WHERE id = $1';
    try {
      const { rows } = await db.query(text, [id]);
      return rows[0];
    } catch(error) {
      return error;
    }
  }
  /**
   * Update A Parcel
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated parcel
   */
  async upateCurrentLocation(id, location) {
    // const findOneQuery = 'SELECT * FROM parcels WHERE id=$1';
    const updateOneQuery =`UPDATE parcels
      SET to=$1 WHERE id=$2 returning *`;
    try {
      const response = await db.query(updateOneQuery, [location, id]);
      return response.rows[0];
    } catch(err) {
      return err;
    }
  }

  /**
   * Cancel A Parcel Order
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated parcel
   */
  async cancelOrder(id) {
    // const findOneQuery = 'SELECT * FROM parcels WHERE id=$1';
    const updateOneQuery =`UPDATE parcels
      SET status=$1 WHERE id=$2 returning *`;
    try {
      const response = await db.query(updateOneQuery, ['cancelled', id]);
      return response.rows[0];
    } catch(err) {
      return err;
    }
  }


  async changeStatus(id, status) {
    // const findOneQuery = 'SELECT * FROM parcels WHERE id=$1';
    const changeOneQuery =`UPDATE parcels
      SET status=$1 WHERE id=$2 returning *`;
    try {
      const response = await db.query(changeOneQuery, [status, id]);
      return response.rows[0];
    } catch(err) {
      console.log(err);
      return err;
    }
  }

 
  /**
   * Get All Parcels
   * @param {object} req 
   * @param {object} res 
   * @returns {object} parcels array
   */
  async getAUsersParcels(userId) {
    const findAllQuery = `SELECT * FROM parcels WHERE "placedBy"=${userId}`;
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return rows;
    } catch(error) {
      return error;
    }
  }
}