import { FC, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { optionConfig } from "../utils/particlesConfig";
import Button from "./ui/Button";



const HeroSection: FC = () => { 

    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
        <section className="h-[50rem] lg:h-[52rem] relative pt-10 px-4 lg:px-20">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={optionConfig}
                className="absolute top-0 left-0 bottom-0 right-0 m-0 p-0 z-[-1]" />
            <div className="space-y-4">
                <div className="text-white space-y-2">
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12">1 Stage</div>
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12 ">12 High Profile Speakers</div>
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12">1000 participants</div>
                </div>
                <div className="-ml-10">
                    <img className="w-[35rem] -mt-8" src="/images/transitions-undressing-the-next-365-better-africa-foundation.png" />
                </div>
                <p className="text-white max-w-lg text-lg">
                    Join over 1,000 young persons in Calabar and get the roadmap into the future of life and global business domination
                </p>
                <div className="text-2xl">
                    <span className="text-blue-500">NOV 18 2023 /
                    </span> <span className="text-white">THE BIG TENT, CALABAR / </span>
                    <span className="text-gray-400 font-medium">8AM</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 w-fit">
                    <Button  variant="solid" className="" text="Buy Tickets" />
                    <Button variant="outlined" className="" text="Buy Tickets" />
                </div>
            </div>

            <div className="absolute -top-24 -right-40 z-[-5] h-fit bg-black hidden lg:block">
                <img src="/images/hero.jpg" alt="" className="h-[70rem w-[58rem" />
            </div>
        </section>
    )
}

export default HeroSection;
