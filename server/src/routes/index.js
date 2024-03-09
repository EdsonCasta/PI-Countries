const  Router  = require("express");
const  allCountries  = require("../controllers/getAllCountries");
const  countryById  = require("../controllers/getCountryById");
const  touristActivities  = require("../controllers/getActivities");
const  countryByName  = require("../controllers/getCountryByName");
const  newActivity  = require("../controllers/postCreateActivities");

const router = Router();

router.get('/countries/name', countryByName);
router.get('/countries', allCountries);
router.get('/countries/:id', countryById);
router.post('/countries', newActivity);
router.get('/activities', touristActivities);

module.exports = router;
