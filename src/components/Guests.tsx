import { IGuest } from "../utils/interfaces";
import GuestCard from "./GuestCard";
import Button from "./ui/Button";


interface IGuests {
    heading: string;
    href: string;
    data: IGuest[];
}


const Guests = ({ heading, href, data }: IGuests) => {

    return (
        <section id={href} className="px-6 py-20 lg:px-12 lg:py-20 space-y-12 bg-darker-blue">
            <h1 className="uppercase text-white lg:text-5xl text-3xl font-medium mb-40">{heading}</h1>
            <div id="speakers" className="flex flex-wrap gap-x-8 gap-y-32 justify-center">
                {data.map(speaker => {
                    const { id, name, image_src } = speaker;
                    return <GuestCard key={id} name={name} image_src={image_src} />
                })}
            </div>
            <Button  showIcon variant="outlined" text="Buy Tickets" href="#ticket" />
        </section>
    )
}


export default Guests;