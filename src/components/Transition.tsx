import { motion } from "framer-motion";
import Button from "./ui/Button";
import { framerVerticalSlide } from "../utils/framer.variants";


const Transition = () => {

    return (
        <section className="px-6 py-10  lg:px-12 lg:py-20 bg-dark-blue space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    {...framerVerticalSlide}
                    className="">
                    <div className="space-y-2 lg:space-y-3 leading-tight mb-8">
                        <h1 className="lg:text-4xl text-3xl text-white"><span className="text-blue-500">PTOJECT 1000</span> which has imapacted over 1500 students and Youths in the last two editions is here again!</h1>
                        {/* <h1 className="text-white text-4xl ">ELEVATE YOUR LIFE AND BUSINESS</h1>
                        <h1 className="text-gray-300 text-4xl ">AT Project 1000 2024</h1> */}
                    </div>
                    <p className="text-white lg:text-2xl text-xl">As a Youth or Undergraduate have you been looking for opportunies to:</p>
                    <div className="text-gray-300 space-y-2 text-lg py-6">
                        <p className="italic flex items-center gap-2"><span className="text-white text-6xl">•</span>Learn relevant skills that will help you navigate the fast evolving workspace ?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Build the right knowledge to grow your business and scale on a global level ?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Start your personal development journey on the right foot with access to quality resources and trainings ?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Build the right connections with like minds and have a healthy network of growth oriented individuals while on campus ?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Learn from mentors and industry experts who have a track record of value in the marketplace ? </p>
                        {/* <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>You’ve probably talked to friends about your problems, but they couldn’t help.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Or you’ve read business books that didn’t give you the answers.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Maybe you’ve watched motivational YouTube videos that didn’t really change things.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Now, you’re tired, stuck, and frustrated.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Tired of hoping without reward.</p> */}
                    </div>
                    <p className="text-white text-2xl">You’re not alone, and you don’t have to struggle like this!</p>
                    <h1 className="text-white text-2xl ">Elevate your Life and Business</h1>
                    <h1 className="text-gray-300 text-2xl ">AT Project 1000 2024</h1>
                </motion.div>
                <img className="self-center" src="/images/transition-1.png" alt="" />
            </div>

            <hr className="border-gray-500" />

            <motion.div
                {...framerVerticalSlide}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <img className="self-center row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 opacity-75" src="/images/the-big-idea.png" alt="" />
                <div className="py-8 space-y-4">
                    <h1 className="text-3xl lg:text-4xl text-white  leading-tight">INTRODUCING<span className="text-blue-500"> "PROJECT 1000: </span>UNLEASH YOUR GENIUS"</h1>
                    <p className="text-gray-300 text-lg">Project 1000 has over the years grown to become the most anticipated skill empowerment project in the university of Benin.</p>
                    <p className="text-gray-300 text-lg"> Project 1000 which statrted in the University of Benin has served as a platform for young people to learn relevant skills, build volunteering experience and grow in their personal development journey.  </p>
                    <p className="text-gray-300 text-lg">Several participants and volunteers have gone ahead to gain both local and international opportunies, it has served as a springboard to the personal development and financial independence journey of many.</p>
                </div>
            </motion.div>

            <hr className="border-gray-500" />

            <div className="py-8 space-y-6">
                <h1 className="lg:text-4xl text-3xl text-white leading-tight"><span className="text-blue-500">THIS IS THE GAME-CHANGER</span> YOU'VE BEEN WAITING FOR! </h1>
                <p className="text-gray-300 text-lg">Project 1000 isn’t just an event; it’s your cheat code to a world of limitless possibilities, purposeful networks, and meaningful achievements. </p>
                <p className="text-gray-300 text-lg">Don’t wait for another second.</p>
                <p className="text-white text-lg font-bold animate-typing overflow-hidden whitespace-nowrap">Start your growth journey now!</p>
                <Button showIcon variant="solid" text="Buy Tickets" href="#ticket" />
            </div>
        </section>
    )
}

export default Transition;