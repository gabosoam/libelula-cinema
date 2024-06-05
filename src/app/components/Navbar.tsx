import { useContext, useState } from 'react';
import { UserCircleIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { BurgerMenuContext } from '@/context/BurgerMenuContext';
import SearchBox from './SearchBox';
import { MenuContext } from '../context/menuContext/MenuContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuToogle, setMenuToogle] = useState(false);
  const userName = "Iniciar sesión"; // Reemplaza esto con el nombre de usuario real


  const { open, onOpen } = useContext(MenuContext);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenu = () => {
    onOpen(!open);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    alert('Logged out');
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleMenu}>
            {open ? (
              <XIcon className="h-10 w-10 text-white" />
            ) : (
              <MenuIcon className="h-10 w-10 text-white" />
            )}

          </button>
          <img src="/images/libelula-cinema-logo.png" alt="Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold hidden md:block">
            Libélula Cinema
          </div>
        </div>
        <div className="flex items-center ml-4 md:w-64"> {/* Aquí agregamos la clase md:w-64 */}
          <SearchBox /> {/* Integramos el componente de búsqueda */}
        </div>
        <div className="relative flex items-center">
          <span className="mr-3 hidden md:block">{userName}</span>
          <button onClick={handleMenuToggle} className="flex items-center">
            <UserCircleIcon className="h-10 w-10 text-white" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-left w-full"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
