import { createContext, useEffect, useState } from 'react';
import { jobsData } from '../assets/assets';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = ({ children }) => {
  const [searchFilters, setSearchFilter] = useState({
    title: '',
    location: '',
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false); // Controls modal visibility

  useEffect(() => {
    // Simulate job fetching
    setJobs(jobsData);
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchFilters,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs,
        showRecruiterLogin,
        setShowRecruiterLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
