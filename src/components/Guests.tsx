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
        <section id={href} className="px-6 py-20 lg:px-12 lg:py-20 space-y-16 bg-darker-blue">
            <h1 className="uppercase text-white lg:text-5xl text-4xl font-medium">{heading}</h1>
            <div id="speakers" className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 lg:gap-x-8 gap-x-8 gap-y-16 justify-center">
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