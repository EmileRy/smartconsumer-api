const sql = require('../config/db');
const SqlHandler = require('./handler/sqlHandler');

// constructor
const Appareil = function Appareil(appareil) {
  this.name = appareil.name;
  this.image_name = appareil.image_name;
  this.electricity_level = appareil.electricity_level;
  this.water_level = appareil.water_level;
};

Appareil.create = (newAppareil, result) => {
  sql.query(
    'INSERT INTO appareils SET ?',
    newAppareil,
    SqlHandler.create(result, newAppareil)
  );
};

Appareil.getAll = (result) => {
  sql.query('SELECT * FROM appareils', SqlHandler.getAll(result));
};

Appareil.findById = (appareilId, result) => {
  sql.query(
    `SELECT * FROM appareils WHERE id = ${appareilId}`,
    SqlHandler.findById(result)
  );
};

Appareil.updateById = (id, appareil, result) => {
  sql.query(
    'UPDATE appareils SET ? WHERE id = ?',
    [appareil, id],
    SqlHandler.updateById(result, appareil, id)
  );
};

Appareil.remove = (id, result) => {
  sql.query('DELETE FROM appareils WHERE id = ?', id, SqlHandler.remove(result));
};

module.exports = Appareil;
