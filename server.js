const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


 const traitementCtrl = require("./controllers/traitement.js");//PREMIER TRAITEMENT
 traitementCtrl.similitudeFunc()

//  const traitementPropertiesCtrl = require("./controllers/traitementFinal.js");//DEUXIEME TRAITEMENT
//   traitementPropertiesCtrl.similitudePropertiesFunc();

//Génération des fichiers 
//Async await pour lancer le deuxième script 


traitement = async () => {

  // await traitementPropertiesCtrl.similitudePropertiesFunc();

};
traitement();

//appel des routeurs

var dejaSimuleRouter = require('./routes/deja_simule');//Routeur ancienne sollicitation
var objectifRouter = require('./routes/objectif');// Routeur nouvelle sollicitation
var simulationRouter = require('./routes/simulation');//Routur ancienne simulation
var similitudeSimulationRouter = require('./routes/similitudeSimulation');//Routeur liens bibliothèque
var similitudeFinaleRouter = require('./routes/similitudeFinale');//Routeur similitude
app.use(cors());
app.use(express.static('public'));// Images
app.use('/objectif', objectifRouter);//Nouvelle sollicitation
app.use('/deja_simule', dejaSimuleRouter);//Ancienne sollicitation
app.use('/simulation', simulationRouter);// Ancienne simulation
app.use('/similitudeSimulation', similitudeSimulationRouter);// Liens bibliothèque
app.use('/similitudeFinale', similitudeFinaleRouter);

// app.use('/similitude',similitudeRouter);


app.use(express.static('dist'));
//route static pour View

app.listen(port, () => console.log('app running'));