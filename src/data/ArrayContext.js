// 1. Create a context
import React, { createContext, useState, useContext } from 'react';

const ArrayContext = createContext();

// 2. Define a Provider
export const ArrayProvider = ({ children }) => {
  const [globalArray, setGlobalArray] = useState([]);

  const addToArray = (item) => {
    setGlobalArray([...globalArray, item]);
  };

  return (
    <ArrayContext.Provider value={{ globalArray, addToArray,setGlobalArray }}>
      {children}
    </ArrayContext.Provider>
  );
};

export const useArray = ()=> useContext(ArrayContext)

