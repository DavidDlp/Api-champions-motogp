const express = require('express');
const pilotRoutes = express.Router();
const {
    getPilot,
    getPilotById,
    getPilotByName,
    postPilot,
    putPilot,
    deletePilot,
    patchPilot
} = require('../controller/pilot.controller')

// pilotRoutes.get ('/', (req,res) => {
//     res.send('Estamos en pilot')
// });

pilotRoutes.get('/', getPilot);
pilotRoutes.get('/:id', getPilotById);
pilotRoutes.get('/name/:nombre', getPilotByName);

pilotRoutes.post('/', postPilot);

pilotRoutes.put('/:id', putPilot);
pilotRoutes.patch('/mark/:id', patchPilot);

pilotRoutes.delete('/:id', deletePilot);


module.exports = pilotRoutes