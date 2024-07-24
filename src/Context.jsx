 import React, { createContext, useReducer, useContext } from 'react';


const initialState = {
    count: 0
  };
  
  const AppContext = createContext();
  
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';
  

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useAppContext = () => useContext(AppContext);
  