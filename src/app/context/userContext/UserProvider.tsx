'use client'
import React, { useState, useEffect } from 'react';
import { UserContext } from "./UserContext";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Leer el estado de localStorage al iniciar la aplicación
    const isLoggedState = localStorage.getItem('isLoggedState');
    const userState = localStorage.getItem('userState');
    console.log('userState', userState)
    if (userState !== null) {
      setUser(JSON.parse(userState));
      setLogged(true)
    } else {
      setUser(null);
      setLogged(false)
    }
  }, []);

  const onLogin = (user: any) => {
    localStorage.setItem('userState', JSON.stringify(user));
    localStorage.setItem('isLoggedState', JSON.stringify(true));
    setUser(user);
    setLogged(true)
  };

  const onLogout = (user: any) => {

    localStorage.removeItem('userState',);
    localStorage.removeItem('isLoggedState')
    setUser(null);
    setLogged(false)
  };

  return (
    <UserContext.Provider value={{ isLogged, user, onLogin, onLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
