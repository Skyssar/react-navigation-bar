import './App.css';
import './Styles/Sidenav.css';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Accelerations from './Components/Pages/Accelerations';
import AccLogs from './Components/Pages/AccLogs';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Statistics from './Components/Pages/Statistics';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import NavigationContainer from './Components/Templates/NavigationContainer';

function App() {
  return (
   <Router>
      <NavigationContainer >
         <Switch>
            <Route path="/" element={<Home />}/>
            <Route path="/aceleraciones">
               <Route index element={<Accelerations />} />
               <Route path="logs" element={<AccLogs />} />
            </Route>
            <Route path="/statistics" element={<Statistics />}/>
            <Route path="/proyectos" element={<Projects />} />
         </Switch>        
      </NavigationContainer>
    </Router>
  );
}

export default App;
