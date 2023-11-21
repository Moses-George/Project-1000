import { useForm } from "../hooks/useForm";
import { ticketFormData } from "../utils/data";
import { ITicket } from "../utils/interfaces";
import Button from "./ui/Button";
import InputField from "./ui/InputField";

const initialData: ITicket = {
    name: "",
    email: "",
    phone_number: ""
}


const TicketForm = () => {

    const { data: ticket, setData: _setData, handleChange } = useForm<ITicket>(initialData);

    return (
        <section className="w-full px-6 py-10 lg:p-20 space-y-16 bg-dark-blue">
            <div className="text-5xl lg:text-6xl text-center space-y-2">
                <h1 className="text-gray-300">Ready To Transition ?</h1>
                <h1 className="text-white font-medium">Get a <span className="text-blue-500">Ticket</span></h1>
            </div>
            <form className="mx-auto w-full lg:w-1/2 space-y-8 bg-[rgba(0,0,0,0.35)] p-8 lg:p-12 rounded-t-[3rem] rounded-bl-[3rem] shadow-xl ">
                {ticketFormData.map(item =>
                    <div key={item.id} className="w-full space-y-2"> 
                        <label
                            className="relative block uppercase tracking-wide text-gray-600 text-xs font-bold mb-3">
                            {item.name}
                        </label>
                        <InputField
                            // id="username"
                            name={item.name}
                            type={item.type}
                            placeholder={item.placeholder}
                            value={ticket[item.name as keyof typeof ticket]}
                            onChange={handleChange}
                            ringColorClass="focus:ring-blue-700"
                            icon={<img src={item.image_src} className="text-slate-600 text-xl fill-white" />} />
                    </div>)}
                <div className="mx-auto">
                    <Button variant="solid" text="Buy Tickets" />
                </div>
            </form>
        </section>
    )
}

export default TicketForm;