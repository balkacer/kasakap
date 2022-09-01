import { createContext, useContext, useState, useMemo } from "react";

const AppContext = createContext();
export function AppWrapper({ children }) {
  const [appState, setAppState] = useState({});
  const contextValue = useMemo(() => {
    return [appState, setAppState];
  }, [appState, setAppState]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}