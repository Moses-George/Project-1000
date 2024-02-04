// import { useForm } from "../hooks/useForm";
// import { ticketFormData } from "../utils/data";
// import { ITicket } from "../utils/interfaces";
import { useState } from "react";
import Button from "./ui/Button";
import RegistrationGuide from "./ui/modals/RegistrationGuide";
import { googleFormLink } from "../utils/data";
// import InputField from "./ui/InputField";

// const initialData: ITicket = {
//     name: "",
//     email: "",
//     phone_number: ""
// }


const TicketPurchase = () => {

    const [isVisible, setIsVisible] = useState(false);

    // const { data: ticket, setData: _setData, handleChange } = useForm<ITicket>(initialData);

    return (
        <>
            {isVisible && <RegistrationGuide setIsVisible={setIsVisible} />}
            <section id="ticket" className="w-full px-6 py-10 lg:p-20 space-y-16 bg-dark-blue">
                <div className="text-4xl lg:text-6xl text-center space-y-2">
                    <h1 className="text-gray-300">Ready To Elevate ?</h1>
                    <h1 className="text-white font-medium">Get a <span className="text-blue-500">Ticket</span></h1>
                </div>
                <div className="mx-auto w-full space-y-6 lg:w-1/2 bg-[rgba(0,0,0,0.35)] p-8 lg:p-12 rounded-t-[3rem] rounded-bl-[3rem] shadow-xl">
                    <h1 className="lg:text-4xl text-3xl text-white text-center uppercase">Account Details</h1>
                    <div className="text-center space-y-3 lg:text-3xl text-2xl text-gray-200 ">
                        <h2 className="">Azuka Ifeanyi Godfrey</h2>
                        <h2 className="">2268627663</h2>
                        <h2 className="">Zenith Bank</h2>
                    </div>
                    <div className="flex flex-col gap-3 items-center w-full">
                        <Button showIcon={false} variant="outlined" text="Registration guide" onClick={() => setIsVisible(true)} />
                        <Button showIcon={false} variant="solid" text="Complete Registration" href={googleFormLink} />
                    </div>
                </div>
                {/* <form className="mx-auto w-full lg:w-1/2 space-y-8 bg-[rgba(0,0,0,0.35)] p-8 lg:p-12 rounded-t-[3rem] rounded-bl-[3rem] shadow-xl ">
                {ticketFormData.map(item =>
                    <div key={item.id} className="w-full space-y-2">
                        <label
                            className="relative block uppercase tracking-wide text-gray-300 text-xs font-bold mb-3">
                            {item.name.split("_").join(" ")}
                        </label>
                        <InputField
                            name={item.name}
                            type={item.type}
                            placeholder={item.placeholder}
                            value={ticket[item.name as keyof typeof ticket]}
                            onChange={handleChange}
                            ringColorClass="focus:ring-blue-700"
                            icon={<img src={item.image_src} className="text-slate-600 text-xl fill-white" />} />
                    </div>)}
                <div className="flex justify-center">
                    <Button variant="solid" text="Buy Tickets" />
                </div>
            </form> */}
            </section>
        </>
    )
}

export default TicketPurchase;