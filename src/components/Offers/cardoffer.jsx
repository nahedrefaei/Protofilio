import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import { Link } from "react-scroll";
import Box from '@mui/material/Box';
export default function OffersCard({title,description,image}) {
  return (
    <Card sx={{ maxWidth: 345 ,backgroundColor:"#1e293b",color:"white",position:"relative",zIndex:10, boxShadow: '0px 0px 0px rgba(0,0,0,0)', // Initial state: fully transparent shadow
      transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out', // Smooth transition for shadow AND optional transform
      '&:hover': {
        boxShadow: '0px 10px 20px cyan', // Shadow when hovered: [x-offset] [y-offset] [blur-radius] [spread-radius (optional)] [color]
        transform: 'translateY(-5px)',
        background:"linear-gradient(to right,rgb(50, 12, 85),rgb(9, 159, 186))", // Optional: lifts the card slightly for a more dynamic effect
      },}}>
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
        <div style={{height:"220px",objectFit:"cover" ,width:"80%",margin:"auto",marginTop:"20px"}}>   <CardMedia
        sx={{ height: 220,borderRadius:"10px" }}
        image={image}
        title="green iguana"
      /></div>
   
      <CardContent sx={{color:"white"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray',mt:"20px" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
       
      }}
    >
      <Link to="contact"><Button variant='outlined' sx={{mt:2,mb:2 ,width:"200px" ,height:"50px" ,fontSize:"20px",border:"1px solid white",color:"white",borderRadius:"50px"  ,"&:hover": {
          backgroundColor: "#06B6D4", 
        },}}>Get in touch</Button></Link>
        </Box>
      </CardActions>
      </motion.div>
          </Card>
       
  );
}
