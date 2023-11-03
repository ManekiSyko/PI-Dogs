const axios = require('axios');
const { API_KEY, URL_PATH_API, URL_PATH_IMAGE } = process.env;

const getRazasByName = async (req, res) => {
  const { name } = req.params;
  try {
    const searchResponse = await axios.get(URL_PATH_API);
    const search = searchResponse.data;

    const dogs = search.map((dog) => ({
      id: dog.id,
      reference_image_id: dog.reference_image_id,
      name: dog.name,
      weight: dog.weight.metric,
      temperament: dog.temperament,
    }));

    const foundDogs = [];

    for (const dog of dogs) {
      if (foundDogs.length >= 8) {
        break; // Si ya tenemos 8 resultados, salimos del bucle.
      }
    
      if (dog.name.toLowerCase().includes(name.toLowerCase())) {
        const imageURL = await axios.get(
          `${URL_PATH_IMAGE}${dog.reference_image_id}?x-api-key=${API_KEY}`,
        );
        const image = imageURL.data.url;
    
        const foundDog = {
          id: dog.id,
          image: image,
          name: dog.name,
          weight: dog.weight,
          temperament: dog.temperament,
        }; 
        foundDogs.push(foundDog);
      }
    }

    if (foundDogs.length > 0) {
      res.status(200).json(foundDogs);
    } else {
      res.status(404).json({ message: 'No se encontraron razas con ese nombre' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getRazasByName;