'use client'
import React, { useState, useEffect } from 'react';
import { MenuContext } from "./MenuContext";

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Leer el estado de localStorage al iniciar la aplicación
    const storedState = localStorage.getItem('menuOpen');
    if (storedState !== null) {
      setOpen(JSON.parse(storedState));
    }
  }, []);

  const onOpen = (state) => {
    setOpen(state);
    // Guardar el estado en localStorage cuando cambia
    localStorage.setItem('menuOpen', JSON.stringify(state));
  };

  return (
    <MenuContext.Provider value={{ open, onOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
