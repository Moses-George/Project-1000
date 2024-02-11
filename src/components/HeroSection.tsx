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
        <section id="hero" className="relative h-[50rem] lg:h-[49rem] relative pt-10 px-4 lg:px-12 mt-20 lg:mt- bg-[url('/images/bg-light.jpg')] bg-cover bg-center bg-no-repeat">
            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={optionConfig}
                className="absolute top-0 left-0 bottom-0 right-0 m-0 p-0 z-[-1]" /> */}
                <div className="absolute top-0 h-full backdrop-blur-[2.5px] w-full left-0 z-0"></div>
            <div className="space-y-3 relative">
                <div className="text-white space-y-2">
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12">2 Stages</div>
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12">4 Courses</div>
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12 ">12 High Profile Facilitators</div>
                    <div className="border-2 border-gray-300 w-fit py-1.5 pl-2 pr-12">2000 participants</div>
                </div>
                <div className="-ml-10">
                    <img className="w-[35rem] " src="/images/unleash.png" />
                </div>
                <p className="text-white max-w-lg text-lg">
                    Empowering Students and Youth with relevant Economic Skills for the Marketplace
                </p>
                <div className="text-2xl flex flex-col">
                    <span className="text-blue-500">23rd and 24th Feb 2024 /
                    </span> <span className="text-white">University of Benin / </span>
                    <span className="text-gray-300 font-medium">9AM Respectively</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 w-fit">
                    <Button showIcon  variant="solid" className="" text="Buy Tickets" href="#ticket" />
                    <Button showIcon={false} variant="outlined" className="" text="Ticket Categories" href="#benefits" />
                </div>
            </div>

            {/* <div className="absolute -top-24 -right-40 z-[-5] h-fit bg-black hidden lg:block">
                <img src="/images/hero.jpg" alt="" className="h-[70rem w-[58rem" />
            </div> */}
        </section>
    )
}

export default HeroSection;
