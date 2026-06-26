import { useEffect,useState } from 'react'
import './App.css'
import "./index.css"
import DrawerAppBar from './components/Navbar/Navbar'
import { responsiveContext } from './components/contexts/context'
function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
          
            useEffect(() => {
              const handleResize = () => {
                // Update the state based on the current window width
                setIsMobile(window.innerWidth < 768);
              };
          
              // Add event listener when the component mounts
              window.addEventListener('resize', handleResize);
          
              // Clean up the event listener when the component unmounts
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
  return (
  
  <responsiveContext.Provider value={isMobile}>
<div style={{backgroundColor:"#0f172a",width:"100vw"}}>
<DrawerAppBar/>
</div>
</responsiveContext.Provider>

  );

}


export default App
