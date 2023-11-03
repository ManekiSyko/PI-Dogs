const axios = require('axios');
const { API_KEY, URL_PATH_API, URL_PATH_IMAGE } = process.env;
const { Dog, Temperament } = require('../db')

const getRazaByID = async (req, res) => {
    const { id } = req.params;
    let foundDogByID = [];
    try { 
        if (id.length < 5) {
            const response = await axios.get(`${URL_PATH_API}${id}`);
            const dog = response.data;
            if (dog) {
                const imageURL = await axios.get(
                    `${URL_PATH_IMAGE}${dog.reference_image_id}?x-api-key=${API_KEY}`,
                );
                const image = imageURL.data.url;
    
                const foundDogAPI = {
                    id: dog.id,
                    image: image,
                    name: dog.name,
                    height: dog.height.metric,
                    weight: dog.weight.metric,
                    life_span: dog.life_span,
                    temperament: dog.temperament,
                };
                foundDogByID.push(foundDogAPI)
        }
            res.status(200).json(foundDogByID);
        } else {
            let dogs_db_search = await Dog.findAll({include: {model: Temperament}});
            if (dogs_db_search.length !== 0) {
                dogs_db_search = dogs_db_search.map(obj => obj.get({ plain: true }))
                dogs_db_search = dogs_db_search.map(obj => {
                    return ({ ...obj, "temperament": obj["Temperaments"].map(e=>e.temperament).join(", ") })
                  });
              }
            let dogs_db = await dogs_db_search.map((dog) => {
                const {
                    id,
                    name,
                    height,
                    weight,
                    life_span,
                    temperament,
                    reference_image_id,
                } = dog;
                return {
                    id,
                    name,
                    height,
                    weight,
                    life_span,
                    temperament,
                    image: reference_image_id,
                }
            })
            console.log(dogs_db);
            const foundDogDB = await dogs_db.find((dog) => dog.id === id);
            foundDogByID.push(foundDogDB)
            res.status(200).json(foundDogByID);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
        
        
    }
};

module.exports = getRazaByID;