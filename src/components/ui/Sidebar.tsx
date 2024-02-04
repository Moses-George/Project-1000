import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import navLinks from "../../utils/navLinks";
import Button from "./Button";
import { framerDelaySlide, framerIcon, framerSidebarPanel } from "../../utils/framer.variants";
import { ISidebarProps } from "../../utils/interfaces";


const SidebarOverlay = ({ onClose }: ISidebarProps) => {

    return (
        <motion.div
            {...framerSidebarPanel}
            className="fixed top-0 right-0 bottom-0 bg-[#010113] z-[9999] w-[18rem] p-6 lg:hidden h-screen space-y-16">
            <div className="flex justify-between items-center">
                <div className="bg-blue-800 rounded-full p-2 w-fit shadow-xl">
                    <img className="w-6 h-6" src="/images/angle.svg" onClick={onClose} />
                </div>
                <img className="h-20 w-28" src="/images/logo.svg" alt="logo" />
            </div>
            <ul className="flex flex-col gap-6 text-white font-medium">
                {navLinks.map((link, index) =>
                    <li className="flex justify-between uppercase py-2 px-3 bg-gray-800 rounded-lg" key={link.id}>
                        <motion.a {...framerDelaySlide(index)} href={link.link}>{link.name}</motion.a>
                        <motion.img {...framerIcon} className="rotate-45" src="/images/arrow.svg" />
                    </li>)}
            </ul>
            <div className="">
                <Button showIcon variant="solid" text="Buy Tickets" href="#ticket" />
            </div>
        </motion.div>
    )
}

const Sidebar = ({ onClose }: ISidebarProps) => {

    const root = document.getElementById('sidebar-root') as HTMLElement;

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <>
                    <Backdrop />
                    <SidebarOverlay onClose={onClose} />
                </>, root)}
        </React.Fragment>
    )
}

export default Sidebar;