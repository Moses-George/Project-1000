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
                    <div className="flex items-center space-x-3 lg:text-2xl text-xl">
                        <a href="#ticket" className="text-blue-400 py-2 px-4 border-2 border-blue-400 w-fit bg-blue-950 rounded-lg">Basic Ticket</a>
                        <span className="bg-blue-300 h-12 w-1 rounded-lg"></span>
                        <span className="text-yellow-600 text-3xl"> #1,000</span>
                    </div>
                    <div className="text-gray-300 text-lg py-6">
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
                    <div className="flex items-center gap-3 lg:text-2xl text-xl">
                        <a href="#ticket" className="text-blue-400 py-2 px-4 border-2 border-blue-400 w-fit bg-blue-950 rounded-lg">Standard Ticket</a>
                        <span className="bg-blue-300 h-12 w-1 rounded-lg"></span>
                        <span className="text-yellow-600 text-3xl"> #5,000</span>
                    </div>
                    <div className="text-gray-300  text-lg py-6">
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