'use client'
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import { FC, ReactNode, createContext, useContext, useState } from "react";
import { MenuContext } from "../context/menuContext/MenuContext";
import Footer from "../components/Footer";

interface Props {
    children?: ReactNode;
}


const MainContainer: FC<Props> = ({
    children,
}) => {

    const { open } = useContext<any>(MenuContext);



    return (



        <main>
            <Navbar />

            <div className="grid grid-cols-12">

                {open &&
                    <div className="lg:col-span-3 col-span-12">
                        <BurgerMenu  ></BurgerMenu>
                    </div>
                }
                <div className={`${open ? 'lg:col-span-9' : 'lg:col-span-12'} col-span-12 pb-8`}>
                    {children}
                </div>


            </div>

            <Footer />





        </main>
    );
}

export default MainContainer
