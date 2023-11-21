import { ChangeEvent, useState } from "react";


export const useForm = <T> (initialUserData: T)  => {

    const [data, setData] = useState<T>(initialUserData);


    const handleChange = (event: ChangeEvent<HTMLInputElement >) => {
        const { name, value } = event.target;


        setData(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        });
    }

    return { data, handleChange, setData };
}

