import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "@mui/material"; // Assuming @mui/material is available
import { motion } from "framer-motion"; // Assuming framer-motion is available
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// No need to import "../Navbar/Navbar.css" if styling is primarily Tailwind CSS

export default function App() { // Renamed to App as per React component export conventions for Canvas

    // Create a ref for the form element to access its data
    const form = useRef();

    // Function to send email using EmailJS
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // EmailJS service call
        // IMPORTANT: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY'
        // with your actual EmailJS credentials.
        emailjs
            .sendForm('service_hyng7tr', 'template_5r1e9ok', form.current, {
                publicKey: 'Xvf7-lfp_OWtHO671',
            })
          .then(
    () => {
        console.log('SUCCESS!');
        alert('Message sent successfully!'); // user feedback
        form.current.reset();
    },
    (error) => {
        console.log('FAILED...', error); // log full error object
        alert(`Failed to send: ${error.text || error.status}`);
    },
);
    };

    return (
        // Main container for the contact page with dark background and white text
        // min-h-screen ensures it takes at least the full viewport height
        // py-10 px-4 adds vertical and horizontal padding, responsive with px-4
        // font-inter is assumed to be available via Tailwind config or global CSS
        <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center py-10 px-4 font-inter">
            {/* Tailwind CSS is assumed to be configured for classes like bg-slate-900, text-white, etc. */}
            {/* Material-UI Container for the main content, limited to extra-large width,
                flex-col and items-center for vertical stacking and centering */}
            <Container maxWidth="xl" className="flex flex-col items-center text-center">
                {/* Heading for the contact section, responsive font sizes */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl mt-10 mb-4 font-bold">Get in touch</h1>
                {/* Descriptive paragraph about availability, max-w-lg limits width for readability */}
                <p className="text-lg sm:text-xl text-gray-400 pb-8 max-w-lg mx-auto">
                    I'm currently available for freelance work and open to new opportunities. Have a project in mind? Let's talk.
                </p>

                {/* Contact form */}
                {/* Removed fixed width styles and replaced with responsive Tailwind classes:
                    w-full ensures full width on small screens, max-w-md limits it on larger screens,
                    mx-auto centers the form horizontally. */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col w-full max-w-md md:max-w-lg lg:max-w-xl gap-5 justify-center items-center mx-auto"
                >
                    {/* Name input field */}
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        id="name"
                        // w-full for full width, px-4 for padding, rounded-lg for rounded corners
                        // border-2 for border, bg-slate-800 for background, text-white for text color
                        // placeholder-gray-500 for placeholder color, focus styles for interaction
                        className="w-full h-12 px-4 rounded-lg border-2 border-slate-700 bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                    />
                    {/* Email input field */}
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        className="w-full h-12 px-4 rounded-lg border-2 border-slate-700 bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    {/* Message textarea */}
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        id="message"
                        // h-32 for height, resize-y allows vertical resizing
                        className="w-full h-32 px-4 py-3 rounded-lg border-2 border-slate-700 bg-slate-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors resize-y"
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>

                    {/* Send Message button with Framer Motion animation */}
                    <motion.button
                        style={{
                            background: "linear-gradient(to right,rgb(35, 10, 58),rgb(4, 67, 78))",
                            borderRadius: "50px",
                        }}
                        // w-full on small screens, md:w-48 on medium screens and up
                        // rounded-full for fully rounded corners, shadow and hover effects
                        className="w-full md:w-48 h-12 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out self-center cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        type="submit"
                        value="Send" // Value attribute is for form submission, not display text
                    >
                        Send Message
                    </motion.button>
                </form>
            </Container>

            {/* Footer section with copyright and social media icons */}
            {/* flex-col on small screens, md:flex-row on medium screens and up for layout */}
            {/* justify-between to space items, items-center to vertically align */}
            {/* mt-20 pt-8 border-t border-slate-700 for spacing and separator */}
            <Container maxWidth="lg" className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-slate-700 w-full px-4">
                {/* Copyright information */}
                <div className="mb-4 md:mb-0 text-gray-500 text-sm">
                    <h6>© 2025 Nahed Refaay. All rights reserved. </h6>
                </div>
                {/* Social media icons */}
                <div className="flex space-x-4">
                    <a href="https://github.com/nahedrefaei" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GitHubIcon sx={{ color: "gray", fontSize: "36px", '&:hover': { color: 'white', transform: 'scale(1.1)' }, transition: 'all 0.3s ease-in-out' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/nahed-refaay-317933285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedInIcon sx={{ color: "gray", fontSize: "36px", '&:hover': { color: 'white', transform: 'scale(1.1)' }, transition: 'all 0.3s ease-in-out' }} />
                    </a>
                    <a href="https://twitter.com/nahedrefaei" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <TwitterIcon sx={{ color: "gray", fontSize: "36px", '&:hover': { color: 'white', transform: 'scale(1.1)' }, transition: 'all 0.3s ease-in-out' }} />
                    </a>
                </div>
            </Container>
        </div>
    );
}