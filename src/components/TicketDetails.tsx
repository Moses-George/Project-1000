import { motion } from "framer-motion";
import { framerVerticalSlide } from "../utils/framer.variants";
import { basicTicketOffers, standardTicketOffers } from "../utils/data";



const TicketDetails = () => {

    return (
        <section id="benefits" className="px-6 py-10 lg:px-12 lg:py-10 bg-dark-blue space-y-12">
            <h1 className="uppercase text-white lg:text-6xl text-3xl">Tickets</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
                <motion.div
                    {...framerVerticalSlide}>
                    <h2 className="text-white lg:text-2xl text-xl ">Basic (N1,000)</h2> 
                    <div className="text-gray-300 space-y-2 text-lg py-6">
                        {basicTicketOffers.map(item => <div key={item.id} className="flex items-center gap-2">
                            <span className="text-white text-7xl">•</span>
                            <span className="mt-2">{item.offer}</span>
                            <span className="text-white text-7xl"></span>
                        </div>)}
                    </div>
                </motion.div>
                <motion.div
                    {...framerVerticalSlide}
                    className="">
                    <h2 className="text-white text-2xl">Standard (N5,000)</h2>
                    <div className="text-gray-300 space-y-2 text-lg py-6">
                        {standardTicketOffers.map(item => <div key={item.id} className="flex items-center gap-2">
                            <span className="text-white text-7xl">•</span>
                            <span className="mt-2">{item.offer}</span>
                        </div>)}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TicketDetails;