import { useState } from 'react';

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import UserIcon from "@mui/icons-material/Person";

function TopBar({ fixed, setFixed }) {

   const [ openDropdown, setOpenDropdown ] = useState(false);

   return (
      <div className="topbar">
         <div className="iconContainer">
            <button type="button" title={ fixed ? "Cerrar" : "Abrir" } className="menuBtn" onClick={ () => setFixed(!fixed) }>
               { fixed ? <MenuOpenIcon /> : <MenuIcon /> }
            </button>
         </div>
         <div className="iconContainer ml-auto">
            <button type="button" title="User" className="menuBtn" onClick={ () => setOpenDropdown(!openDropdown) } >
               { <UserIcon /> }
            </button>
            <div className={`dropdownMenu dropdownMenuRight ${ openDropdown && "show" }`}>
               <a href="/" className="dropdownItem">
                  <span className="fontBold">User</span>
                  <br />
                  Username
               </a>
               <hr className="m0" />
               <a href="/" className="dropdownItem">Cerrar Sesión</a>
            </div>
         </div>
      </div>
   )
}

export default TopBar