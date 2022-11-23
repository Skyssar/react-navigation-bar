import { useState } from 'react'
import SideNav from '../SideNav'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function NavigationContainer({ children }) {

   const [ fixed, setFixed ] = useState(false);
   
   return (
      <div className={ `navContainer ${ fixed && "layoutFixed" }` }>
         <SideNav fixed={ fixed } />
         <div className="topbar">
            <div className="menuBtnContainer">
               <button className="menuBtn navLink" onClick={ () => setFixed(!fixed) }>
                  { fixed ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon /> }
               </button>
            </div>
            <div className="profileIconContainer ml-auto">
               <button className="menuBtn navLink">
                     { <KeyboardDoubleArrowLeftIcon /> }
               </button>
               <div className="dropdownMenu dropdownMenuRight">
                  <a href="#" className="dropdownItem">Username</a>
               </div>
            </div>
         </div>
         <div className="content">
            { children }
         </div>
      </div>
   )
}

export default NavigationContainer