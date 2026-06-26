import Projectscard from "./projectscard";
import { Container } from "@mui/material";
// motion import is kept if you plan to use Framer Motion within Projectscard or for animations here
import {motion} from "framer-motion";
import academia from "./academia.jpg";
import eventx from "./eventx.png";
import library from "./library.jpg";
import plane from "./plane.jpg";
import movie from "./movie.jpg";
import { useContext } from "react"; // Import useContext
import { responsiveContext } from "../contexts/context"; // Import responsiveContext

export default function Projects() {
    const isMobile = useContext(responsiveContext); // Use the context for responsiveness

    const project = [
        {
            title: "Airline Passenger Satisfaction",
            description: "A full-stack ML project that predicts airline passenger satisfaction using a dataset of flight reviews. It includes Exploratory Data Analysis (EDA), data preprocessing, model training, and evaluation. The project is deployed as a web application using Flask, allowing users to input flight details and receive satisfaction predictions based on the trained model.",
            tags: ["Machine Learning", "Data Science", "Web Development","Python", "Flask"],
            img: plane,
            link: "https://github.com/VALKAN00/Airline-Passenger-Satisfaction"
        },
        {
    title: "Library Management System",
    description: "A full-stack web application for managing a library's books, members, and borrowing records. Features include book catalog browsing, member registration, borrow and return tracking, and an admin dashboard built with React and powered by a RESTful API.",
    tags: ["React.js", "Web Development", "JavaScript", "axios API", "Node.js"],
    img:library,
    link: "https://github.com/VALKAN00/library-management-frontend"
},
{
    title: "Academia — College Management System",
    description: "A full-stack college management platform built with React, covering student enrollment, course scheduling, grade tracking, and faculty management. Integrated with a machine learning module that predicts student performance and identifies at-risk students based on attendance and academic history.",
    tags: ["React.js", "Web Development", "JavaScript", "Node.js", "axios API", "Machine Learning", "Python"],
    img: academia,
    link: "https://github.com/VALKAN00/college-system-frontend"
},
{
    title: "EventX Studio — Event Management System",
    description: "A full-stack event management platform built with React, enabling organizers to create, schedule, and manage events end-to-end. Features include attendee registration, ticketing, real-time seat availability, speaker management, and an analytics dashboard tracking event performance and engagement.",
    tags: ["React.js", "Web Development", "JavaScript", "Node.js", "REST API", "Tailwind CSS"],
    img: eventx,
    link: "https://github.com/nahedrefaei/FinalMAIAMeventx_Project"
},
       {
    title: "Movie App",
    description: "A React web application that lets users discover and search movies by genre. Built with Axios to consume the TMDB API, it features dynamic genre filtering, movie detail pages, search functionality, and a responsive card-based layout for browsing results in real time.",
    tags: ["React.js", "Axios", "TMDB API", "JavaScript", "Web Development", "Tailwind CSS"],
    img: movie,
    link: "https://github.com/nahedrefaei/vite_Movie_App"
},
    ];

    return (
        <div className="bg-slate-900 min-h-screen py-16 text-white text-center flex flex-col items-center justify-center ">
            <h1 className="text-4xl sm:text-5xl mb-12  pb-15 text-center">My Projects</h1>
            <Container
                maxWidth='lg'
                // Responsive grid: 1 column on mobile, 2 columns on medium screens and up
                className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-10 px-10 sm:px-6 overflow-hidden`}
            >
                
                {project.map((p, index) => (
                    <Projectscard
                        key={index} // Added key prop for list rendering
                        title={p.title}
                        description={p.description}
                        tags={p.tags} // Tags are already an array of strings, no need to map again
                        img={p.img}
                        link={p.link}
                    />
                ))}
            </Container>
        </div>
    );
}