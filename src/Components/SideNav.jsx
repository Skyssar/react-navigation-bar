import { sidebarData } from "../lib/sidebarData"
import { NavLink } from "react-router-dom";
import { useState } from "react";

import logoXL from '../assets/icons/Logo_SGC.svg';
import logoXS from '../assets/icons/SGC_min.png';

function SideNav({ fixed }) {

   const [ open, setOpen ] = useState(false);

   const handleToggle = ( op ) =>{
      if ( !fixed ){
         open !== op && setOpen(op)
      }
   }

   const handleSubMenu = (e) =>{
      const el = e.target.closest('ul.sidebarMenu > li');
      el.classList.toggle('menuOpen');
   }

   return (
      <div id="sidenav" onMouseEnter={()=>handleToggle(true)}  onMouseLeave={()=>handleToggle(false)}  className={open || fixed ? 'sidenav': 'sidenavClosed' }>
         <div className="sidenavContainer">
            <NavLink to="/" className="brandLink">
               <img src={ logoXS } alt="Logo SGC XS" className="brandLogoXS" />
               <img src={ logoXL } alt="Logo SGC XL" className="brandLogoXL" />
               <span className="brandText">Catalogador Admin</span>
            </NavLink>
            <nav title="SidebarNavigation">
               <ul className="sidebarMenu list">
                  { 
                     sidebarData.map(item => {
                        if ( item.submenu ){
                           return(
                              <li key={ item.id } className="sideItem">
                                 <span className="navLink menuText" onClick={ handleSubMenu }>
                                    { item.icon }
                                    <span className="linkText">{ item.text }</span>
                                 </span>
                                 <ul className="list navSubmenu">
                                    { 
                                       item.children.map((child, index) => {
                                          return(
                                             <li key={ index } className="sideItem">
                                                <NavLink
                                                   to={ child.link }
                                                   title={ child.text }
                                                   className="navLink"
                                                   end
                                                >
                                                   { child.icon }
                                                   <span className="linkText">{ child.text }</span>
                                                </NavLink>
                                             </li>
                                          )
                                       }) 
                                    }
                                 </ul>
                              </li>
                           )
                        }
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
               </ul>
            </nav>
            
         </div>
      </div>
   )
}

export default SideNav;