import { useState } from 'react'
import SideNav from '../SideNav'
import TopBar from '../TopBar';

function NavigationContainer({ children }) {

   const [ fixed, setFixed ] = useState(false);
   
   return (
      <div className={ `navContainer ${ fixed && "layoutFixed" }` }>
         <SideNav fixed={ fixed } />
         <TopBar fixed={ fixed } setFixed={ setFixed } />
         <div className="content">
            { children }
         </div>
      </div>
   )
}

export default NavigationContainer