import { ISPeaker } from "../utils/interfaces";

const SpeakerCard = ({ name, image_src, location }: ISPeaker) => {

    return (
        <div className="shadow-lg rounded-tl-3xl rounded-br-3xl bg-blue-200 lg:flex-grow basis-1/4 hover:opacity-75">
            <div className="flex justify-center flex-col bg-blue-900 w-full h-full -mt-3 -ml-3 rounded-br-3xl shadow-xl px-4 py-8 space-y-8 ">
                <div className="lg:w-[16rem] lg:h-[16rem] w-60 h-60 bg-blue-200 rounded-full -mt-28 mr-2 lg:mr-6 p-2 mx-auto">
                    <img className="lg:w-[20rem] lg:h-[15rem] w-60 h-56 rounded-full" src={image_src} alt={name} />
                </div>
                <div className="text-cente space-y-1">
                    <h3 className="text-white text-xl font-medium uppercase">{name}</h3>
                    <div className="relative flex items-center gap-3">
                        <div className="absolute -left-[.1rem] animate-ping w-4 h-4 rounded-full bg-sky-400 opacity-75" />
                        <img className="" src="/images/location.svg" />
                        <p className="text-blue-200 font-bold">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerCard;