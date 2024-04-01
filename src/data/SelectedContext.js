import React, { createContext, useContext, useState } from 'react';

// Create the SelectedContext
const SelectedContext = createContext();

// Custom hook to use SelectedContext
export const useSelectedContext = () => useContext(SelectedContext);

// SelectedProvider component to wrap your app and provide the context
export const SelectedProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedOverlay, setOverlay] = useState(0);

  return (
    <SelectedContext.Provider value={{ selectedTask, setSelectedTask, selectedOverlay, setOverlay }}>
      {children}
    </SelectedContext.Provider>
  );
};
