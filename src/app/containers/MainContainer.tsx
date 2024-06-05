'use client'
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import { createContext, useContext, useState } from "react";
import { MenuContext } from "../context/menuContext/MenuContext";

const BurgerMenuContext = createContext();

export default function MainContainer({ children }) {

    const { open, onOpen } = useContext(MenuContext);

    const isMobile = () => {
        const screenWidth = window.innerWidth;
        return screenWidth < 640;
    };

    return (



        <main>
            <Navbar />

            <div className="grid grid-cols-12">

                {open &&
                    <div className="lg:col-span-3 col-span-12">
                        <BurgerMenu  ></BurgerMenu>
                    </div>
                }

               
                <div className={`col-span-${((!isMobile()) && open) ? '9' :'12'}`}>
                    {children}
                </div>




            </div>





        </main>
    );
}
