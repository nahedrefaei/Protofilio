import profile from "./profile.jpg";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import "../Navbar/Navbar.css"; // Ensure this path is correct
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useContext } from "react";
import { responsiveContext } from "../contexts/context"; // Ensure this path is correct
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";
// Container from @mui/material is not used in the provided code, so it can be removed if not needed elsewhere.
// import { Container } from "@mui/material"; 

export default function App() { // Renamed to App for default export
    const isMobile = useContext(responsiveContext);

    // Typewriter effect for displaying dynamic text
    const Typewriter = () => {
        const [text, setText] = useState('');
        const words = ["Frontend Developer"];
        const [wordIndex, setWordIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);

        useEffect(() => {
            const type = () => {
                const currentWord = words[wordIndex];
                const updatedText = isDeleting
                    ? currentWord.substring(0, text.length - 1)
                    : currentWord.substring(0, text.length + 1);

                setText(updatedText);

                if (!isDeleting && updatedText === currentWord) {
                    // If done typing, wait 2 seconds then start deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                } else if (isDeleting && updatedText === '') {
                    // If done deleting, switch to next word
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            };
            // Adjust typing speed based on whether text is being typed or deleted
            const typingSpeed = isDeleting ? 100 : 150;
            const timeout = setTimeout(type, typingSpeed);
            return () => clearTimeout(timeout); // Cleanup timeout on unmount or re-render
        }, [text, isDeleting, wordIndex]);

        // Render the typing text with a blinking cursor effect
        return <span className="border-r-2 border-purple-400 animate-pulse">{text}</span>;
    };

    // Ref for the main container to detect mouse movements for parallax effect
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Handles mouse movement to calculate rotation values for parallax
    const handleMouseMove = (e) => {
        if (!ref.current) return; // Ensure ref is available
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate percentage of mouse position relative to the element center
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        // Set rotation values, inverted for a natural feel (mouse up -> rotate up)
        setRotateX(yPct * -10); // Max rotation of 10 degrees
        setRotateY(xPct * 10);  // Max rotation of 10 degrees
    };

    // Resets rotation when mouse leaves the element
    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        // Main container for the Home section with background gradient and parallax mouse events
        <motion.div
            className='bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen flex items-center justify-center py-10'
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            // Apply the calculated rotations to the entire section for a subtle parallax effect
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.2s ease-out' // Smooth transition for rotation
            }}
        >
            {/* Inner content container, centered and with horizontal padding */}
            <div className="flex flex-col items-center text-center px-4">
                {/* Profile image with responsive sizing, rounded corners, shadow, and hover effect */}
                <motion.img
                    src={profile}
                    alt="Nahed"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-2xl shadow-purple-900/20 object-cover transform transition duration-500 hover:scale-110"
                    // Initial animation for image appearance
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, type: 'spring', stiffness: 120 }}
                />
                {/* Name heading with responsive font sizes */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-8 mb-4">Nahed</h1>

                {/* Dynamic typewriter text with responsive font sizes */}
                <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-purple-400 font-medium mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    I'm a {Typewriter()}
                </motion.p>

                {/* Social media icons with responsive sizing and hover effects */}
                <div className="flex justify-center gap-6 mb-8">
                    {/* GitHub Icon */}
                    <a href="https://github.com/nahedrefaei" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <GitHubIcon sx={{ color: "gray", fontSize: isMobile ? "35px" : "45px", transition: "color 0.3s ease-in-out", "&:hover": { color: "#0A66C2" } }} />
                    </a>

                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/nahed-refaay-317933285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <LinkedInIcon sx={{ color: "gray", fontSize: isMobile ? "35px" : "45px", transition: "color 0.3s ease-in-out", "&:hover": { color: "#0A66C2" } }} />
                    </a>

                    {/* Twitter Icon */}
                    <a href="https://twitter.com/nahedrefaei" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                        <TwitterIcon sx={{ color: "gray", fontSize: isMobile ? "35px" : "45px", transition: "color 0.3s ease-in-out", "&:hover": { color: "#1DA1F2" } }} />
                    </a>
                </div>

                {/* "View My Work" button with scroll link and animation */}
                <Link to="projects" smooth={true} duration={500}>
                    <motion.button
                        className="w-40 sm:w-48 h-12 bg-purple-900 hover:bg-purple-700 text-white font-bold text-lg rounded-full transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.6 }}
                    >
                        View My Work
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
