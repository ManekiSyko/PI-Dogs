import {
  GET_TEMPERAMENTS,
  SEARCH_BREEDS,
  SET_ALL_CARDS,
  SET_CURRENT_PAGE,
  CREATE_BREED,
  FILTER,
  ORDER,
} from "./actions"

const initialState = {
  temperaments: [],
  APICards: [],
  DBCards: [],
  allCards: [],
  allCardsUnfiltered: [],
  currentPage: 1, 
  cardsPerPage: 8,
  filters: 'allB',
  isLoading: false,
  errors: {
    create: {},
  },
};

const filter = (state, action) => {
  let filterBreeds = [...state.allCards];
  if (action.payload === "allB" || action.payload === "created" || action.payload === "api") {
    if (action.payload === "created") filterBreeds = filterBreeds.filter((element) => isNaN(element.id));
    if (action.payload === "api") filterBreeds = filterBreeds.filter((element) => !isNaN(element.id));
    return {
      ...state,
      allCards: filterBreeds,
      filters: { ...state.filters, filters: action.payload },
    };
  } else {
    if (state.filters === "created") filterBreeds = filterBreeds.filter((element) => isNaN(element.id));
    if (state.filters === "api") filterBreeds = filterBreeds.filter((element) => !isNaN(element.id));
    return {
      ...state,
      allCards: filterBreeds,
      filters: { ...state.filters },
    };
  }
};

const orderBy = (arr, property, order) => {
  return [
    ...arr.sort((a, b) => {
      const a1 = a[property].split(/ - /);
      const b1 = b[property].split(/ - /);
      if (a1[a1.length - 1] > b1[b1.length - 1]) return order === "asc" ? 1 : -1;
      if (a1[a1.length - 1] < b1[b1.length - 1]) return order === "asc" ? -1 : 1;
      return 0;
    }),
  ];
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BREEDS:
      if (action.payload === "allB") {
        // Restaura los breeds a la copia no filtrada
        return {
          ...state,
          allCards: [...state.allCardsUnfiltered],
        };
      } else {
        // Filtra los breeds según la búsqueda
        return {
          ...state,
          allCards: [
            ...state.allCards.filter((element) =>
              element.name.toString().toLowerCase().includes(action.payload.toString().toLowerCase())
            ),
          ],
        };
      }
      case CREATE_BREED:
        if (action.payload.status === 400) {
          return {
            ...state,
            errors: {
              ...state.errors,
              create: action.payload,
            },
          };
        }
        break
    case FILTER:
      if (action.payload === "allB") {
        // Restaura los breeds a la copia no filtrada
        return {
          ...state,
          allCards: [...state.allCardsUnfiltered],
        };
      }
      else if (action.payload === "created") {
        return {
          ...state,
          allCards: [...state.DBCards],
        };
      }
      else if (action.payload === "api") {
        return {
          ...state,
          allCards: [...state.APICards],
        };
      }
      return filter(state, action);

    case ORDER:
      return {
        ...state,
        allCards: orderBy(state.allCards, action.payload.slice(0, -3), action.payload.slice(-3)),
      };
      case SET_ALL_CARDS:
        const {created, api} = action.payload
        if (Array.isArray(created) && Array.isArray(api)) {
          return {
            ...state,
            allCardsUnfiltered: [...api, ...created],
            allCards: [...api, ...created],
            DBCards: [...created],
            APICards: [...api],
            };
        }
        else {
          return {
            ...state,
          }
        }
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      case GET_TEMPERAMENTS:
        return {
          ...state,
          temperaments: action.payload,
        };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
