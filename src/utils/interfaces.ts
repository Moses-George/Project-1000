import { ChangeEvent, ReactNode } from "react";

export interface INav {
    id: string;
    name: string;
    link: string;
}

export interface IBtnVariants  {
    outlined:string;
    solid: string;
}

export interface IBtnProps {
    variant: string;
    className?: string;
    text: string;
    onClick?: () => void
} 

export interface ISPeaker {
    id?: string;
    name: string;
    image_src: string;
    location: string;
}

export interface InputFieldProps {
    id?: string; 
    name: string;
    placeholder: string;
    type: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void, 
    icon: ReactNode,
    ringColorClass: string;
}

export interface ITicket {
    name: string;
    email: string;
    phone_number: string | number;
}

export interface ISidebarProps {
    onClose?: () => void;
}

export interface IAccordionProps {
    id: string;
    index: number;
    question: string;
    answer: string;
    toggleAccordion: (item: string) => void;
    isOpen: boolean;
}