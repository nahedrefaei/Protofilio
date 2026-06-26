import { Container } from '@mui/material';
import OffersCard from './cardoffer';
import { motion } from 'framer-motion'; // Ensure you have framer-motion installed: npm install framer-motion
import web from "./web.jpeg";
import { useContext } from "react";
import { responsiveContext } from "../contexts/context";

export default function Offers() {
    const isMobile = useContext(responsiveContext);
    const offers = [
        {
            title: "Web Development",
            description: "I can help you build a website that is both functional and visually appealing. I use the latest technologies to create a website that is easy to navigate and provides a great user experience.",
            image: web,
        },
        
    ];

    return (
        <div className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]  min-h-screen py-16 text-white text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl mb-12 pb-15">What I Offer</h1>
            <Container
                maxWidth='lg'
                className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8 px-4 sm:px-6`}
            >
                {offers.map((offer, index) => (
                    <OffersCard
                        key={index} // It's better to use a unique ID if available, otherwise index is okay for static lists
                        title={offer.title}
                        description={offer.description}
                        image={offer.image}
                    />
                ))}
            </Container>
        </div>
    );
}