import { IBtnProps, IBtnVariants } from "../../utils/interfaces";


const variants: IBtnVariants = {
    outlined: "bg-transparent text-blue-600 hover:bg-blue-700 hover:text-white",
    solid: "bg-blue-700 text-white hover:border-2  hover:bg-transparent hover:text-blue-600"
};


const Button = ({ variant, className, text, showIcon, href, onClick }: IBtnProps) => {

    return (
        // <a>
        <button onClick={onClick} className={` rounded-md shadow-xl w-fit h-12 lg:w px-4 lg:h-[3.5rem]  text-lg font-medium border-2 border-blue-500  ${className} ${variants[variant as keyof typeof variants]}`}>
            <a href={href} className="flex items-center justify-center gap-3"  rel="noreferrer">
                {showIcon && <div className=" rouneded-full animate-bounce">
                    <img className="rotate-[270deg]" src="images/arrow.svg" />
                </div>}
                <span>{text}</span>
            </a>
        </button>
        // </a>
    )
}

export default Button;