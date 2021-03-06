import React from 'react'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'

const Navigation=()=>{
return(
   <div className="column">
       <a href=""><About/></a>
       <a href=""><Projects/></a>
       <a href=""><Resume/></a>

   </div> 
)
}

export default Navigation;