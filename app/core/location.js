const Appareil = require("../models/appareil.model");
const Core = require("../core/core.js");

// Get the usable appareils list for a specified location
exports.getAppareils = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  const locationName = req.params.locationName;
  console.log("Request: " + locationName);

  const axios = require('axios');

  axios.get("http://api.openweathermap.org/data/2.5/weather?appid=cfe72599279e93c9239e58f6c82b29ab&q="+locationName)
  .then(weatherResponse => {
    const weatherData = weatherResponse.data;

    axios.get("https://hubeau.eaufrance.fr/api/vbeta/prelevements/chroniques?format=json&size=1&nom_commune="+locationName)
    .then(waterResponse => {
      const waterData = waterResponse.data;

      Appareil.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving Appareils.',
          });
        else {
          let usable = Core.getUsableDevices(data, weatherData, waterData);

          res.send(usable);
        }
      });

    })
    .catch(error => {
      console.log(error);
    });

  })
  .catch(error => {
    console.log(error);
  });
};