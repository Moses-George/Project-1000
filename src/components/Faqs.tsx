import { useState } from "react";
import { faqs } from "../utils/data";
import Accordion from "./ui/Accordion";



const Faqs = () => {

    const [openedAccordions, setOpenedAccordions] = useState(["f1"]);

    const toggleAccordion = (accordion_id: string) => {
        if (openedAccordions.includes(accordion_id)) {
            setOpenedAccordions(openedAccordions.filter(id => id !== accordion_id));
        } else {
            setOpenedAccordions((prev) => [...prev, accordion_id]);
        }
    }

    return (
        <section id="faqs" className="relative px-6 py-10 lg:px-12 lg:py-20 space-y-16 bg-darker-blue">
            {/* <div className="absolute bottom-[25%] left-20  lg:left-[57%] lg:top-80 flex gap-4">
                <img className="-mt-4 h-16 lg:h-24" src="images/question.svg" alt="" />
                <img className="h-12 lg:h-16" src="images/question-sm.svg" alt="" />
                <img className="-mb-4 h-16 lg:h-24" src="images/question.svg" alt="" />
            </div> */}
            <div className="">
                <h1 className="text-3xl lg:text-5xl text-blue-500">Frequently</h1>
                <h1 className="text-3xl lg:text-5xl text-white m-0">Asked Questions</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-20 pb-10">
                <div className="space-y-6">
                    {faqs.map((faq, index) =>
                        <Accordion
                            key={faq.id}
                            id={faq.id}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            toggleAccordion={toggleAccordion}
                            isOpen={openedAccordions.includes(faq.id)} />
                    )}
                </div>
                <div className="self-center">
                <img className="" src="/images/faq.png" alt="faqs" />
                </div>
            </div>
        </section>
    )
}

export default Faqs;