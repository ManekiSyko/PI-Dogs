import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createBreed, getTemperaments } from '../../redux/actions';

const Cartita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45em;
  box-shadow: -4px 4px 15px rgba(32, 32, 32, 0.5);
  background-color: #ffe6a0;
  border-bottom-right-radius: 3em;
  border-bottom-left-radius: 3em;
  border-style: solid;
  border-width: 4px;
  border-top-width: 0px;
  border-color: #ffd780;
  margin-left: 13em;
  margin-right: 13em;
  padding-bottom: 2em;
`;
const Divs = styled.div`
  display: flex;
`;
const Entrada = styled.input`
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 50px;
  width: 20em;
  border-radius: 2em;
  border-width: 0em;
  padding-right: 2em;
  padding-left: 2em;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
`;
const EntradaChica = styled.input`
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 50px;
  width: 6em;
  border-radius: 2em;
  border-width: 0em;
  padding-right: 1em;
  padding-left: 1em;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
`;
const DivA = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 1em;
  width: 40em;
`;
const DivB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'YellowCandy';
  margin-left: 4em;
`;
const DivC = styled.div`
  display: flex;
`;
const DivIndividual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Titulo = styled.div`
  margin-top: 30px;
  font-family: "YellowCandy";
  font-size: 4em;
  color: #8b5f2b;
`;
const Descripcion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 30px;
  width: 6em;
  font-family: "YellowCandy";
  font-size: 2.5em;
  color: #b48852;
`;
const EntradaSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  resize: vertical;
  background-color: white;
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 50px;
  max-height: 150px;
  width: 20em;
  border-top-right-radius: 0.5em;
  border-top-left-radius: 2em;
  border-width: 0em;
  padding-right: 2em;
  padding-left: 2em;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
  overflow: auto;
`;
const Selector = styled.select`
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 13em;
  width: 24em;
  border-bottom-left-radius: 2em;
  border-width: 0em;
  padding-right: 2em;
  padding-left: 2em;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
`;
const Boton = styled.button`
  background-color: #ffd768;
  color: #b48852;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
  border-width: 0px;
  border-style: solid;
  height: 2em;
  width: 6em;
  margin-bottom: 1em;
  border-radius: 2em;
  font-family: 'YellowCandy';
  font-size: 2em;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 1px 5px rgba(32, 32, 32, 0.5);
    background-color: #b48852;
    color: #dfdfdf;
  }
`;
const Creador = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1em;
`;
const Borrador = styled.button`
  background-color: #ffd768;
  color: #b48852;
  box-shadow: -2px 2px 10px rgba(32, 32, 32, 0.5);
  border-width: 0px;
  border-style: solid;
  height: 40px;
  width: 50px;
  margin-left: 5em;
  border-radius: 2em;
  font-family: 'YellowCandy';
  font-size: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: -1px 1px 5px rgba(32, 32, 32, 0.5);
    background-color: #b48852;
    color: #dfdfdf;
  }
`;
const NewBreedForm = ({ temperaments, createBreed, getTemperaments }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    weight: '',
    height: '',
    life_span: '',
    temperament: '',
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      getTemperaments();
      setDataLoaded(true);
    }
  }, [getTemperaments, dataLoaded]);

// Para manejar los temperamentos seleccionados
  const handleChangeTemps = (e) => {
    const { name, options } = e.target;
        const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
      const uniqueSelectedOptions = selectedOptions.filter(
        (option) => !formData.temperament.includes(option)
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData.temperament, ...uniqueSelectedOptions, ", "],
      }));
};

// Para manejar los inputs
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

// Para limpiar la lista de temperamentos seleccionados
  const handleClearTemperaments = () => {
    setFormData((prevData) => ({
      ...prevData,
      temperament: '', 
    }));
  };

// Para crear la raza
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createBreed(formData);
  };

  return (
    <Cartita>
      <Titulo>Crear una nueva raza</Titulo>
      <form onSubmit={handleSubmit}>
        <Divs>
          <DivA>
            <DivIndividual>
              <Descripcion>Nombre</Descripcion>
              <Entrada
                type="text"
                name="name"
                placeholder="..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </DivIndividual>
            <DivIndividual>
              <Descripcion>Imagen</Descripcion>
              <Entrada
                type="text"
                name="image"
                placeholder="inserte URL"
                value={formData.image}
                onChange={handleChange}
              />
            </DivIndividual>
            <DivC>
              <DivIndividual>
                <Descripcion>Peso</Descripcion>
                <EntradaChica
                  type="text"
                  name="weight"
                  placeholder="min - max"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </DivIndividual>
              <DivIndividual>
                <Descripcion>Altura</Descripcion>
                <EntradaChica
                  type="text"
                  name="height"
                  placeholder="min - max"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </DivIndividual>
            </DivC>
            <DivIndividual>
              <Descripcion>Años de vida</Descripcion>
              <EntradaChica
                type="text"
                name="life_span"
                placeholder="min - max"
                value={formData.life_span}
                onChange={handleChange}
                required
              />
            </DivIndividual>
          </DivA>
          <DivB>
            <Descripcion>
              Temperamentos
              <Borrador onClick={handleClearTemperaments}>X</Borrador>
              </Descripcion>
            <EntradaSelector>
            {formData.temperament ? formData.temperament : "..."}
            </EntradaSelector>
            <Selector
              name="temperament"
              value={formData.temperament}
              onChange={handleChangeTemps}
              required
              multiple
            >
              {temperaments.map((temp) => (
                <option key={temp.id} value={temp.temperament}>
                  {temp.temperament}
                </option>
              ))}
            </Selector>
          </DivB>
        </Divs>
        <Creador>
          <Boton type="submit">CREAR</Boton>
        </Creador>
      </form>
    </Cartita>
  );
};

const mapStateToProps = (state) => {
  return {
    temperaments: state.temperaments, // Asegúrate de tener los temperamentos en tu estado de Redux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBreed: (formData) => {
      // Aquí debes implementar la acción para crear una nueva Breed y enviar los datos al servidor.
      // Puedes utilizar la acción createBreed(formData) importada desde tus acciones de Redux.
      dispatch(createBreed(formData));
    },
    getTemperaments: () => {
      dispatch(getTemperaments());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBreedForm);