import { speakers } from "../utils/data";
import SpeakerCard from "./SpeakerCard";
import Button from "./ui/Button";



const Speakers = () => {

    return (
        <section id="speakers" className="px-6 py-20 lg:p-20 space-y-12 bg-darker-blue">
            <h1 className="uppercase text-white lg:text-6xl text-5xl font-medium mb-36">Speakers</h1>
            <div id="speakers" className="flex flex-wrap gap-x-20 gap-y-32 justify-center">
                {speakers.map(speaker => {
                    const { id, name, location, image_src } = speaker;
                    return <SpeakerCard key={id} name={name} location={location} image_src={image_src} />
                })}
            </div>
            <Button variant="outlined" text="Buy Tickets" />
        </section>
    )
}


export default Speakers;