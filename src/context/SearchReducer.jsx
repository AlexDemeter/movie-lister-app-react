export const SearchActions = {
    SET_DATA: 'SET_DATA',
}
  
  
export const searchDataReducer = (state,action) => {
    switch (action.type) {
      case SearchActions.SET_DATA: {
        return {
          ...state,
          query: action.query,
          filter: action.filter
        };
      }
      default:
        return state;
    }
  };
  