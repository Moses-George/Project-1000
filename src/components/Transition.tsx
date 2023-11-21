import { motion } from "framer-motion";
import Button from "./ui/Button";
import { framerVerticalSlide } from "../utils/framer.variants";


const Transition = () => {

    return (
        <section className="px-6 py-10 lg:p-20 bg-dark-blue space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    {...framerVerticalSlide}
                    className="">
                    <div className="space-y-2 lg:space-y-3 leading-tight mb-8">
                        <h1 className="text-4xl text-white"><span className="text-blue-500">UNLEASH</span> YOUR POTENTIAL!</h1>
                        <h1 className="text-white text-3xl ">ELEVATE YOUR LIFE AND BUSINESS</h1>
                        <h1 className="text-gray-300 text-4xl ">AT TRANSITIONS 2023</h1>
                    </div>
                    <div className="text-gray-400 space-y-2 text-lg py-6">
                        <p className="italic flex items-center gap-2"><span className="text-white text-6xl">•</span>Imagine this: You, stuck in a place where everything’s going wrong.
                            Problems are piling up around you like water rising in a flood. You have great ideas, but it feels like you’re failing to stay afloat.
                        </p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Does it seem like time is slipping away, and you’re not getting closer to your dreams?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Ever felt like there’s more to life, but you don’t know how to get there?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Is your business struggling to grow and succeed?</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>You’re not alone, and you don’t have to struggle like this.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>You’ve probably talked to friends about your problems, but they couldn’t help.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Or you’ve read business books that didn’t give you the answers.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Maybe you’ve watched motivational YouTube videos that didn’t really change things.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Now, you’re tired, stuck, and frustrated.</p>
                        <p className="flex items-center gap-2"><span className="text-white text-6xl">•</span>Tired of hoping without reward.</p>
                    </div>
                </motion.div>
                <img className="self-center" src="/images/transition-1.png" alt="" />
            </div>

            <hr className="border-gray-500" />

            <motion.div
                {...framerVerticalSlide}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <img className="self-center row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 opacity-75" src="/images/the-big-idea.png" alt="" />
                <div className="py-8 space-y-4">
                    <h1 className="text-4xl lg:text-4xl text-white  leading-tight"><span className="text-blue-500">INTRODUCING "TRANSITIONS: </span>UNDRESSING THE NEXT 365"</h1>
                    <p className="text-gray-400 text-lg">At Transitions, you’ll immerse yourself in electrifying sessions led by forward-thinking
                        speakers like John Obidi, Dr. Jesam Oboma, Chinaza Favour, Julius Afolabi, Faith Aziegbemi, Joseph Etim,
                        Uke Enun and more. Their insights will not only ignite the flames of inspiration within you but also provide
                        data-backed strategies for dominating the next 365 days guaranteed to turbocharge your personal and business growth.</p>
                    <p className="text-gray-400 text-lg">It’s more than just a conference; it’s a rendezvous with your future self. </p>
                    <p className="text-gray-400 text-lg">A chance to connect with like-minded individuals, swap success stories, and cultivate a network that’ll last a lifetime. </p>
                    <p className="text-gray-400 text-lg">With Transitions, you won’t just glimpse the future; you’ll co-create it. </p>
                    <p className="text-gray-400 text-lg">Ready to dive in and discover the amazing opportunities waiting for you? </p>
                </div>
            </motion.div>

            <hr className="border-gray-500" />

            <div className="py-8 space-y-6">
                <h1 className="text-4xl text-white leading-tight"><span className="text-blue-500">THIS IS THE GAME-CHANGER</span> YOU'VE BEEN WAITING FOR! </h1>
                <p className="text-gray-400 text-lg">Transitions isn’t just an event; it’s your cheat code to a world of limitless possibilities, purposeful networks, and meaningful achievements. </p>
                <p className="text-gray-400 text-lg">Don’t wait for another second.</p>
                <p className="text-white text-lg font-bold animate-typing overflow-hidden whitespace-nowrap">Start your growth journey now!</p>
                <Button variant="solid" text="Buy Tickets" />
            </div>
        </section>
    )
}

export default Transition;