import React from 'react'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import {Route,Switch,Link} from 'react-router-dom'

const Navigation=()=>{
return(
   <div className="sidebar">     
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