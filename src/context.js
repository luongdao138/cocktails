import React, { useContext, useState, useEffect, useCallback } from 'react';

const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData, searchTerm]);

  return (
    <AppContext.Provider
      value={{ isLoading, fetchData, cocktails, setSearchTerm, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
