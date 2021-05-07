import React from 'react'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import {Route,Switch,Link} from 'react-router-dom'

const Navigation=()=>{
return(
   <div>
      <div className="nav_link">
      <div><Link to="/">About</Link></div>
      <div><Link to="/Resume">Resume</Link></div>
      <div><Link to="/Projects">Projects</Link></div>
     </div>
     
       <Switch>
        <Route exact path='/'>
        <About/>
        </Route>
        <Route path='/Resume'>
        <Resume/>
        </Route>
        <Route path='/Projects'>
        <Projects/>
        </Route>
       </Switch>
   </div> 
)
}

export default Navigation;