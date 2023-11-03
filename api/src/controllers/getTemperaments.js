const axios = require('axios')
const {URL_PATH_API, API_KEY} = process.env;
const {Temperament} = require('../db')

const getTemperaments = async (req, res) => {
    try {
        const search = await axios(`${URL_PATH_API}?x-api-key=${API_KEY}`);
        const temperaments = {};
        const data = search.data;
        let nextId = 1;

        const uniqueTemperaments = [...new Set(data.flatMap(dog => (dog.temperament || "").split(', ')))].filter(temperament => temperament.trim() !== '').sort();
      
        for (const temperament of uniqueTemperaments) {
          temperaments[temperament] = nextId++;
        }
      
        const result = [];
        for (const [temperament, id] of Object.entries(temperaments)) {
          result.push({ temperament, id });
        }
        const DBTemps = Temperament.findAll();
        if (DBTemps.length === 0) {
          DBTemps = uniqueTemperaments.map(temp => {return {temperament: temp}})
          Temperament.bulkCreate(DBTemps)
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = getTemperaments;
