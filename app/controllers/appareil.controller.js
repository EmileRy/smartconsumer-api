const Appareil = require('../models/appareil.model');

// Create and Save a new Appareil
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a Appareil
  const appareil = new Appareil({
    name: req.body.name,
    image_name: req.body.image_name,
    electricity_level: req.body.electricity_level,
    water_level: res.body.water_level,
  });

  // Save Appareil in the database
  Appareil.create(appareil, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Appareil.',
      });
    else res.send(data);
  });
};

// Retrieve all Appareils from the database.
exports.findAll = (req, res) => {
  Appareil.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Appareils.',
      });
    else res.send(data);
  });
};

// Find a single Appareil with a id
exports.findOne = (req, res) => {
  Appareil.findById(req.params.appareilId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Appareil with id ${req.params.appareilId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Appareil with id ${req.params.appareilId}`,
        });
      }
    } else res.send(data);
  });
};

// Update a Appareil identified by the appareildId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a Appareil
  const appareil = new Appareil({
    name: req.body.name,
    image_name: req.body.image_name,
    electricity_level: req.body.electricity_level,
    water_level: res.body.water_level,
  });

  Appareil.updateById(req.params.appareilId, appareil, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Appareil with id ${req.params.appareilId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Appareil with id ${req.params.appareilId}`,
        });
      }
    } else res.send(data);
  });
};

// Delete a Appareil with the specified appareilId in the request
exports.delete = (req, res) => {
  Appareil.remove(req.params.appareilId, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Appareil with id ${req.params.appareilId}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete Appareil with id ${req.params.appareilId}`,
        });
      }
    } else res.send({ message: `Appareil was deleted successfully!` });
  });
};

// Retrieve all Appareils nb uses from the database.
exports.findAllNbUses = (req, res) => {
  Appareil.getAllNbUses((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Appareils.',
      });
    else res.send(data);
  });
};

exports.addOneUse = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  Appareil.addUse(req.params.appareilId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Appareil with id ${req.params.appareilId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Appareil with id ${req.params.appareilId}`,
        });
      }
    } else res.send(data);
  });
};

exports.removeOneUse = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  Appareil.removeUse(req.params.appareilId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Appareil with id ${req.params.appareilId}.`,
        });
      } else {
        res.status(500).send({
          message: `Error updating Appareil with id ${req.params.appareilId}`,
        });
      }
    } else res.send(data);
  });
};