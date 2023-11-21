import { InputFieldProps } from "../../utils/interfaces";

const InputField = ({ id, name, placeholder, type, value, onChange, icon, ringColorClass }: InputFieldProps) => {

    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 w-10 pointer-events-none">
                {icon}
            </div>
            <input
                type={type}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                className={`bg-black border-4 border-blue-500 text-white text-md rounded-lg focus:bg-whie focus:ring-4 focus:outline-none ${ringColorClass} block w-full pl-12 p-2.5`}
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default InputField;
