const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.delete('/city/:id',CityController.destroy);
router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);

module.exports = router;