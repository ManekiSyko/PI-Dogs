const axios = require('axios');

const { API_KEY, URL_PATH_API, URL_PATH_IMAGE } = process.env;
const { Dog, Temperament } = require('../db')

const getDogs = async (req, res) => {
    try {
        const search = await axios.get(`${URL_PATH_API}?x-api-key=${API_KEY}`);

        let dogs_api = await Promise.all(
            search.data.map(async (dog) => {
                const imageCode = dog.reference_image_id;
                const imageResponse = await axios.get(
                    `${URL_PATH_IMAGE}${imageCode}?x-api-key=${API_KEY}`,
                );
                const image = imageResponse.data.url;
                const {
                    id,
                    name,
                    height,
                    weight,
                    life_span,
                    temperament,
                } = dog;

                return {
                    id,
                    image,
                    name,
                    height: height.metric,
                    weight: weight.metric,
                    life_span,
                    temperament,
                };
            })
        );

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
        let dogs= { "api": dogs_api, "created": dogs_db};
        res.status(200).json(dogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getDogs;