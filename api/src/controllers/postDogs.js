const { Dog, Temperament } = require('../db');

const postDogs = async (req, res) => {
  const {name, image, height, weight, life_span, temperament}= req.body;
  try {
    console.log('Data received', [name, image, height, weight, life_span, temperament]);
    let ExistingDog = await Dog.findOne({ where: { name: name }})
    if (ExistingDog) {
      return res.status(400).json({error: 'Esa raza ya existe'});
    }
      const newDog = await Dog.create({
        name: name,
        reference_image_id: image,
        height: height,
        weight: weight,
        life_span: life_span,
      });
    if (temperament) {
      for (let index = 0; index < temperament.length; index++) {
        const tempName = temperament[index];
        const temp = await Temperament.findOne({
          where: { temperament: tempName },
        });
        if (temp) {
          await newDog.addTemperament(temp);
        }
      }
    }
    console.log("Raza creada", newDog);
    res.status(200).json(newDog);
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDogs;