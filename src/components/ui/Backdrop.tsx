import { motion } from "framer-motion";
import { framerSidebarBackground } from "../../utils/framer.variants";

const Backdrop = () => {
    return (
        <motion.div
            {...framerSidebarBackground}
            className="fixed backdrop top-0 left-0 w-full h-screen z-[1000] bg-[rgba(0,0,0,0.35)]" />
    )
}

export default Backdrop;