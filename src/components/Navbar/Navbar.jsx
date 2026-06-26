import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Events, scroll, scroller } from 'react-scroll'; // Import Link from react-scroll

// Import your components
import Home from '../Home/home';
import About from '../About/About';
import Offers from '../Offers/Offers';
import Projects from '../Projects/projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/contact';

import '../Navbar/Navbar.css';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Offers', 'Projects', 'Skills', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Close drawer after clicking a link on mobile
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ backgroundColor:"#0f172a",height:"100vh" }}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' ,color:"white"}}>
       Nahed Refaay
      </Typography>
      <Divider />
      <List sx={{ textAlign: 'center',backgroundColor:"#0f172a" ,color:"white",textDecoration:"none",'& a':{textDecoration:"none"}}}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              activeClass="active"
              
              to={item.toLowerCase()} // Target ID
              spy={true}
              smooth={true}
              offset={-100} // Adjust this offset if your AppBar covers content
              duration={500}
              onClick={handleLinkClick}
              style={{ width: '100%' }} // Ensure Link takes full width for ListItemButton styles
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{ paddingRight: '10px', paddingLeft: '10px', height: '80px', backgroundColor: '#0F172AB3' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'start', paddingTop: '30px' }}
          >
            Nahed Refaay
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block', paddingTop: '35px' } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                activeClass="active"
                to={item.toLowerCase()} // Target ID
                spy={true}
                smooth={true}
                offset={-100} // Adjust this offset if your AppBar covers content
                duration={500}
                onClick={handleLinkClick}
              >
                <Button sx={{ color: 'gray', fontSize: '20px' }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: '100%'  }}>
        <Toolbar /> {/* This creates space for the fixed AppBar */}
        {/* Use the 'name' prop for react-scroll Link targets */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="offers">
          <Offers />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;