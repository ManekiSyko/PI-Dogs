const initialState = {
    dogs: [],
    results: [],
    loading: true,
  };
  
  const dogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DOGS_SUCCESS':
        return {
          ...state,
          dogs: action.payload,
          loading: false,
        };
      case 'GET_RESULTS_SUCCESS':
        return {
          ...state,
          results: action.payload,
        };
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dogsReducer;