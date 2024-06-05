"use client";
import { useContext, useState } from 'react';
import { MenuContext } from '../context/menuContext/MenuContext';

const BurgerMenu = () => {
  
  const { open, onOpen } = useContext(MenuContext);

  const toggleMenu = () => {
    onOpen(!open);
  };

  return (
    <div className="">

      <div className={`${open ? 'block' : 'hidden'}`}>
        {/* Aquí puedes agregar los elementos del menú */}
        <div className="px-2 pt-2 space-y-1">
          {/* Por ejemplo: */}
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Acerca
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
