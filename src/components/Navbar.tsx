import { FC, useState } from "react";
import navLinks from "../utils/navLinks";
import Button from "./ui/Button";
import Sidebar from "./ui/Sidebar";


const Navbar: FC = () => {

    const [isOpen, setIsOpen] = useState(false); 

    return (
        <>
            {isOpen && <Sidebar onClose={()=> setIsOpen(false)} />}
            <header className="w-full py-8 px-4 lg:px-20">
                <nav className="w-full flex justify-between gap-12 items-center text-white">
                    <div className="">
                        <img className="w-40" src="/images/logo.png" alt="logo" />
                    </div>
                    <ul className="text-white font-medium hidden lg:flex justify-between justify-self-start gap-8">
                        {navLinks.map(link =>
                            <li className="uppercase" key={link.id}>
                                <a href={link.link}>{link.name}</a>
                            </li>)}
                    </ul>
                    <div className="">
                        <img className="lg:hidden w-8 h-8" src="/images/hambuger.svg" alt="" onClick={()=> setIsOpen(true)} />
                        <Button className="hidden lg:flex" variant="solid" text="Buy Tickets" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;