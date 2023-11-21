import { motion } from "framer-motion";
import { framerDelaySlide } from "../../utils/framer.variants";
import { IAccordionProps } from "../../utils/interfaces";

const Accordion = ({ id, question, answer, toggleAccordion, isOpen, index }: IAccordionProps) => {

    return (
        <motion.div
            {...framerDelaySlide(index)}
            className="rounded-xl border-b-2 border-x-0 border-t-0 border-gray-700 z-[100]">
            <button className="inline-flex justify-between items-center gap-x-3 text-2xl w-full font-semibold text-start text-gray-300 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500">
                {question}
                {!isOpen ? <img className="w-4" src="/images/plus.svg" onClick={() => toggleAccordion(id)} /> :
                    <img className="w-4" src="/images/minus.svg" onClick={() => toggleAccordion(id)} />}
            </button>
            {isOpen && <div className="w-full overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-4 px-5">
                    <p className="text-gray-400 text-lg">
                        {answer}
                    </p>
                </div>
            </div>}
        </motion.div>
    )
}

export default Accordion;