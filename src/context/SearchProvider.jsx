import React, { createContext, useContext } from 'react';
import {
    searchDataReducer
} from './SearchReducer';


export const SearchDataContext = createContext({
  state: {},
  dispatch: () => {
    throw Error(
      'CustomerDataState dispatch only usable with provided function'
    );
  },
});

const initialState = {
    query: '',
    filter: ''
};

export const SearchDataContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(searchDataReducer, initialState);
  const contextValue = React.useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <SearchDataContext.Provider value={contextValue}>
      {children}
    </SearchDataContext.Provider>
  );
};

export const useSearchContext = () => {
  const { state } = useContext(SearchDataContext);
  return state;
};

export const useSearchDispatch = () => {
  const { dispatch } = useContext(SearchDataContext);
  return dispatch;
};
