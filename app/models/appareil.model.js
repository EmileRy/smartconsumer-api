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
  sql.query('SELECT id,name,image_name,electricity_level,water_level FROM appareils', SqlHandler.getAll(result));
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

Appareil.getAllNbUses = (result) => {
  sql.query('SELECT name,nb_uses FROM appareils', SqlHandler.getAll(result));
};

Appareil.addUse = (appareilId, result) => {
  sql.query(
    `UPDATE appareils SET nb_uses = nb_uses+1 WHERE id = ${appareilId}`,
    SqlHandler.updateById(result)
  );
};

Appareil.removeUse = (appareilId, result) => {
  sql.query(
    `UPDATE appareils SET nb_uses = nb_uses-1 WHERE id = ${appareilId}`,
    SqlHandler.updateById(result)
  );
};

module.exports = Appareil;
