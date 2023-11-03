const { Router } = require('express');
const getDogs = require('../controllers/getDogs');
const getRazaByID = require('../controllers/getRazaByID');
const getRazaByName = require('../controllers/getRazaByName');
const getTemperaments = require('../controllers/getTemperaments');
const postDogs = require('../controllers/postDogs');

const router = Router();

router.get('/dogs', getDogs);
router.get('/dogs/id/:id', getRazaByID);
router.get('/dogs/name/:name', getRazaByName);
router.get('/temperaments', getTemperaments);
router.post('/dogs', postDogs);

module.exports = router;
