import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"; // Ensure you have framer-motion installed: npm install framer-motion
// Make sure you have framer-motion installed: npm install framer-motion

export default function Projectscard({ title, description, tags, img, link }) {
  return (
    // This motion.div acts as the Tailwind 'group' for hover effects
    // and handles the initial animation (opacity, y-axis movement)
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="group relative h-full rounded-lg overflow-hidden flex justify-center items-center" // Added overflow-hidden for cleaner blur edges
      // The 'relative' class is crucial for the absolute positioned glow div
      // 'h-full' ensures consistent card height in a grid
    >
      {/* The glowing gradient border effect div */}
      {/* This div uses Tailwind classes for its styling and hover effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

      {/* The main Material-UI Card component */}
      <Card
        sx={{
          borderRadius: "10px", // Matched with the blur div's rounded-lg
          maxWidth: 400,
          border: "2px solid #0f172a", // Dark border for the card itself
          backgroundColor: "#1e293b", // Dark background for the card
          color: "white", // Default text color within the card

          display: "flex",
          flexDirection: "column", // Stack content vertically
          justifyContent: "space-between", // Push action items to the bottom
          height: "100%", // Ensures cards in a grid have consistent height

          position: "relative", // Crucial: sets context for z-index, allowing card to be above glow
          zIndex: 10, // Ensures the card content is always on top of the blurred gradient

          // --- Shadow on Hover Styles (using MUI's sx prop) ---
          boxShadow: '0px 0px 0px rgba(0,0,0,0)', // Initial state: fully transparent shadow
          transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', // Smooth transition for shadow AND optional transform
          '&:hover': {
            boxShadow: '0px 10px 20px cyan', // Shadow when hovered: [x-offset] [y-offset] [blur-radius] [spread-radius (optional)] [color]
            transform: 'translateY(-5px)',
            background:"linear-gradient(to right,rgb(35, 10, 58),rgb(4, 67, 78))", // Optional: lifts the card slightly for a more dynamic effect
          },
        }}
      >
        {/* Card Media (Image) */}
        <CardMedia
          sx={{
            height: 220, // Fixed height for the image area
            // objectFit: "cover", // Uncomment if images have varying aspect ratios and you want them to cover the area
          }}
          image={img}
          title={title} // Use the actual title for accessibility (alt text)
        />

        {/* Card Content (Title & Description) */}
        <CardContent sx={{ flexGrow: 1 }}> {/* Allows content to grow and push actions down */}
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', textAlign: "start" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', textAlign: "start" }}>
            {description}
          </Typography>
        </CardContent>

        {/* Card Actions (Tags/Buttons) */}
        <CardActions
      sx={{
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingX: "16px",
        // Using `display: "flex", flexWrap: "wrap", gap: "10px"` here on CardActions
        // is also an option if you want to eliminate the inner div,
        // but your current div approach is fine too.
        // display: "flex",
        // flexWrap: "wrap",
        // gap: "10px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tags.map((tag) => (
          <Button
            key={tag}
            sx={{
              color: 'white',
              borderRadius: "50px", // Pill-shaped buttons
              backgroundColor: "#06B6D4", // Default Cyan-500 background
              '&:hover': {
                backgroundColor: '#0891B2', // Slightly darker Cyan-700 on hover for visual feedback
                // You could also consider a slight transform or scale on hover:
                // transform: 'scale(1.02)',
              },
            }}
            variant="contained"
            disableRipple // Optional: disable the ripple effect on button click
          >
            {tag}
          </Button>
        ))}
      </div>
    </CardActions>

        {/* Links to GitHub and Live Project */}
        <div className='flex justify-end' style={{ paddingBottom: "10px", paddingRight: "10px" }}> {/* Add padding to align with CardActions */}
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub`}>
            <GitHubIcon sx={{ color: "gray", fontSize: "20px", cursor: "pointer", margin: "0 5px", '&:hover': { color: 'white' } }} />
          </a>
        
        </div>
      </Card>
    </motion.div>
  );
}