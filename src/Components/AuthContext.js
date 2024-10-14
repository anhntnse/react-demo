import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = (token) => {
    setAuth(token);
    localStorage.setItem('token', token); // Lưu token vào localStorage
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('token'); // Xóa token khỏi localStorage
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
