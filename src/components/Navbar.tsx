import { FC, useState } from "react";
import navLinks from "../utils/navLinks";
import Button from "./ui/Button";
import Sidebar from "./ui/Sidebar";


const Navbar: FC = () => {

    const [isOpen, setIsOpen] = useState(false); 

    return (
        <>
            {isOpen && <Sidebar onClose={()=> setIsOpen(false)} />}
            <header className="w-full px-4 lg:px-12 shadow-sm fixed top-0 backdrop-blur-md transition ease-out delay-100 duration-500 z-[100]">
                <nav id="navbar" className="w-full flex justify-between gap-12 items-center text-white">
                    <div className="-ml-14">
                        <img className="lg:h-24 lg:w-48 h-20 w-28 ml-6 lg:ml-0" src="/images/logo.svg" alt="logo" />
                    </div>
                    <ul className="text-white font-medium hidden lg:flex justify-between justify-self-start gap-8">
                        {navLinks.map(link =>
                            <li className="uppercase" key={link.id}>
                                <a href={link.link}>{link.name}</a>
                            </li>)}
                    </ul>
                    <div className="">
                        <img className="lg:hidden w-8 h-8" src="/images/hambuger.svg" alt="" onClick={()=> setIsOpen(true)} />
                        <Button showIcon className="hidden lg:block" variant="solid" text="Buy Tickets" href="#ticket" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;