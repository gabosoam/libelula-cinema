import { createContext, useState } from 'react';

export const BurgerMenuContext = createContext();

export const BurgerMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BurgerMenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};