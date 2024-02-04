import { motion } from "framer-motion";
import { sessions } from "../utils/data";
import Button from "./ui/Button";
import { framerHorizontalSlide } from "../utils/framer.variants";
// import { framerDelaySlide } from "../utils/framer.variants";


const Sessions = () => {

    return (
        <section id="sessions" className="px-6 py-10 lg:px-12 lg:py-20 bg-dark-blue space-y-16">
            <h1 className="lg:text-5xl text-3xl text-white uppercase">Sessions</h1>
            <div className="space-y-8">
                {sessions.map((session, _index) =>
                    <motion.div
                        key={session.id}
                        {...framerHorizontalSlide}
                        className="flex gap-4 border-b-2 border-x-0 border-t-0 border-gray-700 pb-6">
                        <div className="h-28 lg:h-24 w-1 bg-blue-500 rounded-lg"></div>
                        <div className="self-end">
                            <h2 className="text-2xl lg:text-4xl text-white font-medium">{session.speaker}</h2>
                            <p className="text-lg lg:text-xl text-gray-300">{session.topic}</p>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="mx-auto">
                <Button showIcon variant="outlined" text="Buy Tickets" href="#ticket" />
            </div>
        </section>
    )
}

export default Sessions;