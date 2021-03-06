import React from 'react'
import img from '../assets/facebook.svg'
import About from "../components/About"
import Navigation from "../components/Navigation"



const Sidebar=()=>{
    return(
        <div className="sidebar">
            <img src={img} alt="avatar" className="sidebar_avatar"/>
            <div className="sidebar_name">Nandhini<span> Devi</span></div>
            <div className="sidebar_item sidebar_title">Web Development</div> 
            <div className="column sidebar_nav">
            <Navigation/>
            </div>
        </div>
    )
}

export default Sidebar;
