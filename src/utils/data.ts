import { IGuest } from "./interfaces";

export const googleFormLink = "https://shorturl.at/eDEGR";

export const faciliators: IGuest[] = [
    {
        id: "s1",
        name: "John Iyoha",
        image_src: "/facilitators/john.jpg"
    },
    {
        id: "s2",
        name: "Fortune Nnamdi",
        image_src: "/facilitators/fortune.jpg"
    },
    {
        id: "s3",
        name: "Dr. Christos Leader",
        image_src: "/facilitators/christos.jpg"
    },
    {
        id: "s4",
        name: "Umanade Oghenemarho",
        image_src: "/facilitators/umanade.jpg"
    },
]

export const speakers: IGuest[] = [
    {
        id: "s1",
        name: "Mr Upgrade",
        image_src: "/speakers/upgrade.jpg"
    },
    {
        id: "s2",
        name: "Gilgal Umia",
        image_src: "/speakers/gilgal.JPG"
    },
    {
        id: "s3",
        name: "Esohe Idehen",
        image_src: "/speakers/esther.jpg"
    },
    {
        id: "s4",
        name: "Kevwe Modupe",
        image_src: "/speakers/kevwe.jpg"
    }
]

export const chats: IGuest[] = [
    {
        id: "s1",
        name: "Ola Adene",
        image_src: "/chats/ola.jpg"
    },
    {
        id: "s2",
        name: "Francis Imariabe",
        image_src: "/chats/francis.jpg"
    },
    {
        id: "s3",
        name: "Tosin Oluwafemi",
        image_src: "/chats/tosin.jpeg"
    },
    {
        id: "s4",
        name: "Emekolom N. Obiajulum",
        image_src: "/chats/emekolum.jpg"
    }
]


export const sessions = [
    {
        id: "m1",
        speaker: "John Iyoha",
        topic: "Business Development"
    },
    {
        id: "m2",
        speaker: "Fortune Nnamdi",
        topic: "Sales and Marketing"
    },
    {
        id: "m3",
        speaker: "Dr. Christos Leader",
        topic: "Financial Intelligence"
    },
    {
        id: "m4",
        speaker: "Umunade Oghenemarho",
        topic: "Tech and Future"
    },
]

export const basicTicketOffers = [
    {
        id: "t1",
        offer: "Access to Training Hall"
    },
    {
        id: "t1",
        offer: "E-Certificate"
    },
    {
        id: "t1",
        offer: "Networking Opportunity"
    },
    {
        id: "t1",
        offer: "Light Refreshments"
    },
    {
        id: "t1",
        offer: "Access to Vendors"
    }
]

export const standardTicketOffers = [
    {
        id: "t1",
        offer: "Everything in the basic ticket +"
    },
    {
        id: "t1",
        offer: "Training Materials"
    },
    {
        id: "t1",
        offer: "Hardcopy Certificate"
    },
    {
        id: "t1",
        offer: "Reserved Sit"
    },
    {
        id: "t1",
        offer: "Branded Souvenir"
    }
]


export const ticketFormData = [
    {
        id: "b1",
        name: "Name",
        type: "text",
        placeholder: "Your name",
        image_src: "/images/person.svg"
    },
    {
        id: "b2",
        name: "Email",
        type: "email",
        placeholder: "Your Email",
        image_src: "/images/email.svg"
    },
    {
        id: "b3",
        name: "phone_number",
        type: "number",
        placeholder: "Your Phone number",
        image_src: "/images/phone.svg"
    },

]


export const faqs = [
    {
        id: "f1",
        question: "Where is the event holding ?",
        answer: "PROJECT1000 holds in the University of Benin (Twin LT 1&2, Social Sciences)"
    },
    {
        id: "f2",
        question: "Why is the event holding for two days ?",
        answer: "PROJECT1000 is a two days event because we offer four different training sessions at PROJECT1000 and we have two of those sessions running simultaneously on day one and the other two on day two. "
    },
    {
        id: "f3",
        question: "Is PROJECT1000 for only Undergraduates ?",
        answer: "No. PROJECT1000 is for every young person out there, we only focus on Undergraduates because the event is situated within he four walls of the University."
    },
    {
        id: "f4",
        question: "Will i be getting a certificate for the event ?",
        answer: "Yes you will. We have E-copy(softcopy) and Hardcopy certificates for our participants."
    },
]