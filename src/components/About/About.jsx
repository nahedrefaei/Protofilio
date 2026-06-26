import profile from "../Home/profile.jpg";
import { Container } from "@mui/material";
import "../Navbar/Navbar.css";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { responsiveContext } from "../contexts/context";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Ensure you have framer-motion installed: npm install framer-motion

export default function About() {
  const isMobile = useContext(responsiveContext);

  return (
    <Container maxWidth='xl' className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]  min-h-screen py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl sm:text-5xl mt-8 pb-10 text-center">About Me</h1>
        <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row'} gap-8 px-4 sm:px-10 lg:px-20`}>
          <div className={`${isMobile ? 'w-full flex justify-center' : 'w-1/3 flex justify-end'}`}>
           
        <motion.img // Use motion.img for Framer Motion animations
            src={profile}
            alt="Nahed"
            // Tailwind CSS classes for responsive dimensions and styling
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 
                       rounded-full mx-auto mb-6 border-4 border-slate-700 
                       shadow-2xl shadow-purple-900/20 object-cover 
                       transform transition duration-500 hover:scale-110"
            // Framer Motion animation properties
            initial={{ scale: 0, opacity: 0, rotate: -180 }} // Added initial rotation
            animate={{ scale: 1, opacity: 1, rotate: 0 }}   // Animate to no rotation
            transition={{ duration: 0.8, type: 'spring', stiffness: 120, damping: 10 }} // Adjusted transition
        />
          </div>
          <div className={`${isMobile ? 'w-full text-center' : 'w-2/3 text-start'} pt-2`}>
            
            <p className="text-gray-400 text-base sm:text-lg mb-3 text-justify">
             I am a dedicated frontend developer with deep expertise in React.js and modern web development. With a strong foundation in component-driven architecture and the JavaScript ecosystem, I build fast, scalable, and maintainable user interfaces from the ground up.
I've built production-ready React applications — from design systems and reusable component libraries, to data-rich dashboards, interactive tools, and seamless single-page applications.
I work across the full frontend stack — from state management with hooks and Context, to routing, API integration, and performance optimization — delivering polished experiences at every layer.
My projects are built to be intuitive, responsive, and visually sharp, with clean code architecture that's as easy to maintain as it is to use.
            </p>
           
            <Link to="contact">
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: isMobile ? "100%" : "200px",
                height: "50px",
                fontSize: "20px",
                border: "2px solid purple",
                color: "purple",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "purple",
                  color: "white",
                  border: "2px solid purple",
                },
              }}
            >
              Let's connect
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}