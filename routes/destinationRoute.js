const express = require('express');
const router = express.Router();
const {createDestination, updateDestinationById,getAllDestinations,getDestinationByState, deleteDestinationById } = require('../controller/destinationController'); // Import the Destination controller


router.post('/createDestination', createDestination);

router.get('/updateDestinationById/:id', updateDestinationById);

 router.get('/getAllDestinations',getAllDestinations);

//  router.patch('/getDestinationByState/:dState', getDestinationByState);

router.post('/getDestinationByState/:dState',getDestinationByState);



router.delete('/deleteDestinationById:id', deleteDestinationById );

module.exports = router;
