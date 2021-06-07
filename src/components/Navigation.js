import React from 'react'
import About from './About'
import Projects from './Projects'
import Resume from './Resume';
import Blog from './Blog';
import Contact from './Contact';
import {Route,Switch} from 'react-router-dom'

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
        <Route path='/Blog'>
        <Blog/>
        </Route>
        <Route path='/Contact'>
        <Contact/>
        </Route>
       </Switch>
   </div> 
)
}

export default Navigation;