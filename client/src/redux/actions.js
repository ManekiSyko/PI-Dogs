export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_ALL_BREEDS = "GET_ALL_BREEDS";
export const SEARCH_BREEDS = "SEARCH_BREEDS";
export const CREATE_BREED = "CREATE_BREED";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const SET_ALL_CARDS = 'SET_ALL_CARDS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const ReactApi = 'http://localhost:3001'

export const getAllBreeds = () => {
  return function (dispatch) {
    fetch(`${ReactApi}/dogs`)
      .then((response) => response.json())
      .then((data) => dispatch(setAllCards(data)));
  };
};

export const getTemperaments = () => {
  return function (dispatch) {
    fetch(`${ReactApi}/temperaments`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_TEMPERAMENTS, payload: data }));
  };
};

export const searchBreeds = (breed) => {
  return {
    type: SEARCH_BREEDS,
    payload: breed,
  };
};

export const createBreed = (breed) => {
  return function (dispatch) {
    console.log("createBreed called with data:", breed); // Agrega esta línea
    fetch(`${ReactApi}/dogs`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(breed),
    })
      .then((response) => response.json())
      .then((data) => {
        // Verificar la respuesta y tomar medidas en consecuencia
        if (data.status !== 200) {
          // Manejar el caso de error
          console.error("Error al crear una nueva raza:", data);
        } else {
          // Manejar el caso de éxito (la nueva raza se ha creado con éxito)
          // Puedes realizar otras acciones aquí, como actualizar la lista de razas en tu estado Redux si es necesario.
          // dispatch(otraAcciónQueActualizaElEstado);
        }
      })
      .catch((error) => {
        // Manejar errores de red u otros errores
        console.error("Error de red al crear una nueva raza:", error);
      });
  };
};

export const filterBreeds = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const orderBreeds = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setAllCards = (cards) => ({
  type: SET_ALL_CARDS,
  payload: cards,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

// const formatBreed = (arr) => {
//   if (!Array.isArray(arr)) {
//     return [];
//   }
//   return arr.map((element) => {
//     return {
//       id: element.id,
//       name: element.name,
//       weight: element.weight,
//       height: element.height,
//       life_span: element.life_span,
//       temperament: element.temperament,
//       image: element.image,
//     };
//   });
// };
