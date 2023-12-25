import React, { createContext, useState } from 'react';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  successDescription: string;
  setSuccessDescription: React.Dispatch<React.SetStateAction<string>>;
  errorDescription: string;
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>;
  fetchLoading: boolean;
  setFetchLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: true,
  setIsAuthenticated: () => {},
  successDescription: '',
  setSuccessDescription: () => {},
  errorDescription: '',
  setErrorDescription: () => {},
  fetchLoading: false,
  setFetchLoading: () => {},
});

function AuthProvider({ children }: AuthContextProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [successDescription, setSuccessDescription] = useState<string>(''); // Success message to display in the alert
  const [errorDescription, setErrorDescription] = useState<string>(''); // Error message to display in the alert
  const [fetchLoading, setFetchLoading] = useState<boolean>(false); // Indicates if the fetch is loading

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        successDescription,
        setSuccessDescription,
        errorDescription,
        setErrorDescription,
        fetchLoading,
        setFetchLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
