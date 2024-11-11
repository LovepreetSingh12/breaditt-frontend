import { createContext, useState, useEffect } from 'react';
import { getCurrentUser, logoutUser } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((userData) => setUser(userData))
      .catch(() => setUser(null));
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    logoutUser().then(() => setUser(null));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};