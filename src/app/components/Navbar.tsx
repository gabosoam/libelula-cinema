'use client'
import React, { useContext, useEffect, useState } from 'react';
import { UserCircleIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import SearchBox from './SearchBox';
import { MenuContext } from '../context/menuContext/MenuContext';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../firebase';
import { UserContext } from '../context/userContext/UserContext';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = "Log in";



  const { open, onOpen } = useContext<any>(MenuContext);

  const {  isLogged, user, onLogout } = useContext<any>(UserContext);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenu = () => {
    onOpen(!open);
  };




  async function handleLogout() {
    await signOut(getAuth(app));
    await fetch("/api/logout");
    handleMenuToggle()
    onLogout()
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleMenu} className='hidden'>
            {open ? (
              <XIcon className="h-10 w-10 text-white" />
            ) : (
              <MenuIcon className="h-10 w-10 text-white" />
            )}

          </button>
          <Link href={'/'}>
            <img src="/images/libelula-cinema-logo.png" alt="Logo" className="h-10 mr-3" />
          </Link>

          <Link href={'/'}>

            <div className="text-2xl font-bold hidden md:block">
              Libélula Cinema
            </div>
          </Link>

        </div>
        <div className="flex items-center ml-6 md:w-80"> {/* Aquí agregamos la clase md:w-64 */}
          <SearchBox /> {/* Integramos el componente de búsqueda */}
        </div>
        <div className="relative flex items-center">

          {isLogged ?

            <React.Fragment>


              <button onClick={handleMenuToggle} className="flex items-center">
                <span className="mr-3 hidden md:block">{user.email}</span>
                <UserCircleIcon className="h-10 w-10 text-white" />
              </button>
            </React.Fragment> :

            <React.Fragment>
              <Link href={'/login'}>
                <span className="mr-3 hidden md:block">{'Log in'}</span>
              </Link>
              <Link href={'/login'} className="flex items-center">
                <UserCircleIcon className="h-10 w-10 text-white" />
              </Link>

            </React.Fragment>

          }


          {menuOpen && (
            <div className="absolute right-5 top-10 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-left w-full"
              >
                Log out

              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
