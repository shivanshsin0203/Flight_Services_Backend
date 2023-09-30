const CityController=require("../../controllers/city-controller");
const FlightController=require('../../controllers/flight-controller')
const express=require("express");
const router=express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.filter)
router.patch('/city/:id',CityController.update);

router.post('/flights',FlightController.create);

module.exports=router;