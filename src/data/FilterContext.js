import React, { createContext, useContext, useState } from 'react';

// Define the context
const FilterContext = createContext();

// Provider component to wrap around your components
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    dateRange: null,
    assigneeName: "",
    priority: "",
    sortBy: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter=()=>useContext(FilterContext);