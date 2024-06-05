'use client'
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import { FC, ReactNode, createContext, useContext, useState } from "react";
import { MenuContext } from "../context/menuContext/MenuContext";

interface Props {
    children?: ReactNode;
}


 const MainContainer: FC<Props> = ({
    children,
}) => {

    const { open, onOpen } = useContext<any>(MenuContext);

   

    return (



        <main>
            <Navbar />

            <div className="grid grid-cols-12">

                {open &&
                    <div className="lg:col-span-3 col-span-12">
                        <BurgerMenu  ></BurgerMenu>
                    </div>
                }


                <div className={`col-span-${ open ? '9' : '12'}`}>
                    {children}
                </div>




            </div>





        </main>
    );
}

export default MainContainer
