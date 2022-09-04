import React, { useContext, useState } from 'react';

const HTMLgContext = React.createContext();
const HTMLgUpdateContext = React.createContext();

export function useHTMLg() {
  return useContext(HTMLgContext);
}

export function useHTMLgUpdate() {
  return useContext(HTMLgUpdateContext);
}

export function HTMLgProvider({ children }) {
  const [HTMLg, setHTMLg] = useState('');

  function updateHTMLg(title) {
    const data = 
    setHTMLg('TutorialContent');
  }

  return (
    <HTMLgContext.Provider value={HTMLg}>
      <HTMLgUpdateContext.Provider value={updateHTMLg}>
        {children}
      </HTMLgUpdateContext.Provider>
    </HTMLgContext.Provider>
  );
}
