import "../Styles/Sidenav.css"
import { sidebarData } from "../lib/sidebarData"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

import logoXL from '../assets/icons/Logo_SGC.svg';
import logoXS from '../assets/icons/SGC_min.png';

function SideNav({ fixed }) {

   const [ open, setOpen ] = useState(false);

   const handleToggle = ( op ) =>{
      if ( !fixed ){
         open !== op && setOpen(op)
      }
   }

   return (
      <div id="sidenav" onMouseEnter={()=>handleToggle(true)}  onMouseLeave={()=>handleToggle(false)}  className={open || fixed ? 'sidenav': 'sidenavClosed' }>
         <div className="sidenavContainer">
            <NavLink to="/" className="brandLink">
               <img src={ logoXS } alt="Logo SGC XS" className="brandLogoXS" />
               <img src={ logoXL } alt="Logo SGC XL" className="brandLogoXL" />
               <span className="brandText">Catalogador</span>
            </NavLink>
            <nav title="SidebarNavigation">
               <ul className="sidebarMenu list">
                  { 
                     sidebarData.map(item => {
                        return (
                           <li key={ item.id } className="sideItem">
                              <NavLink 
                                 to={ item.link } 
                                 title={ item.text }
                                 className="navLink" 
                                 end
                              >
                                 { item.icon }
                                 <span className="linkText">{ item.text }</span>
                              </NavLink>
                           </li>
                        )
                     })
                  }
                  <li className="sideItem">
                     <span className="navLink">
                        <KeyboardDoubleArrowLeftIcon />
                        <span className="linkText">Menú de opciones</span>
                     </span>
                     <ul className="list">
                        <li className="sideItem">
                           <NavLink
                              to='/' 
                              title="Hola"
                              className="navLink" 
                              end
                           >
                           <KeyboardDoubleArrowRightIcon />
                              <span className="linkText">Hola</span>
                           </NavLink>
                        </li>
                        <li className="sideItem">Hola</li>
                     </ul>
                  </li>
               </ul>
            </nav>
            
         </div>
      </div>
   )
}

export default SideNav;