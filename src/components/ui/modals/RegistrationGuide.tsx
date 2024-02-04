import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import Button from "../Button";
import { framerSlideDown } from "../../../utils/framer.variants";
import { googleFormLink } from "../../../utils/data";


export interface IModalProps {
    setIsVisible: (isVisible: boolean) => void;
}

const RegistrationGuideOverlay = ({ setIsVisible }: IModalProps) => { 

    return (
        <motion.div
            {...framerSlideDown}
            className="fixed top-2 lg:top-4 bg-[#010113] z-[9999] lg:w-[35rem] w-[95%] px-6 py-6 lg:h-fit h-screen overflow-y-scroll lg:overflow-y-hidden space-y-3 rounded-lg">
            <h1 className="text-white text-2xl lg:text-3xl text-center">Registration Guide</h1>
            <p className="flex items-center gap-2 text-white"><span className="text-6xl">•</span>Click the Ticket categories link below and check the benefits of both categories (Basic and Standard)</p>
            <a href="/#benefits" className="m-0 text-blue-500 underline" onClick={() => setIsVisible(false)}>Ticket Categories</a>
            <p className="flex items-center gap-2 text-white"><span className="text-6xl">•</span>After choosing a preferred ticket option, make a transfer to the Account on the Website</p>
            <p className="flex items-center gap-2 text-white"><span className="text-6xl">•</span>Click the "COMPLETE REGISTRATION" button to fill in your details and upload your transaction receipt.</p>
            <p className="flex items-center gap-2 text-white"><span className="text-6xl">•</span>Ensure you follow the link after you "SUBMIT" the form to join our paid participants Whatsapp platform.</p>
            <p className="flex items-center gap-2 text-white"><span className="text-6xl">•</span>Now let's get it done before you use the money to buy Shawarma or watch tiktok video 😂😂</p>
            <Button showIcon={false} variant="outlined" text="Complete Registration" href={googleFormLink} className="mx-auto block" />
            <Button showIcon={false} variant="solid" text="close guide"  className="mx-auto block" onClick={() => setIsVisible(false)} />
        </motion.div>
    )
}

const RegistrationGuide = ({ setIsVisible }: IModalProps) => {

    const root = document.getElementById('modal-root') as HTMLElement;

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <>
                    <Backdrop />
                    <RegistrationGuideOverlay setIsVisible={setIsVisible} />
                </>, root)}
        </React.Fragment>
    )
}

export default RegistrationGuide;