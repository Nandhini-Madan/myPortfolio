import React from 'react'
import img from '../assets/facebook.svg'
import About from "../components/About"
import Navigation from "../components/Navigation"



const Sidebar=()=>{
    return(
        <div className="sidebar">
            <img src={img} alt="avatar" className="sidebar_avatar"/>
            <div >Nandhini<span> Devi</span></div>
            <div >Web Development</div> 
            <div className="column sidebar_nav">
            <Navigation/>
            </div>
        </div>
    )
}

export default Sidebar;
