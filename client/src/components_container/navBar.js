import React from 'react'
import playImage from '../images/playImage.png'
import aboutImage from '../images/aboutImage.png'
import { Link } from "react-router-dom"


const Header = () => {

  return(
    <div className={"navBar"} style={{color: 'black'}}>
      <Link className={"navlink"} to="/"> <img src={playImage} /> </Link>
      <Link className={"navlink"} to="/randomdots"> <img src={aboutImage} /> </Link>
    </div>


    )

}

export default Header


// <ul className={"no-vertical-margin"}>
//   <li> <Link className={"navlink"} to="/moveit"> <img src={playImage} />  </Link> </li>
//   <li> <Link className={"namlink"} to="/randomdots"> <img src={aboutImage} />  </Link> </li>
// </ul>

// <div className={"navBar"} style={{color: 'black'}}>
//   <ul className={"no-vertical-margin"}>
//     <li> <Link to="/"> Home </Link> </li>
//     <li> <Link to="/randomdots"> Random Dots </Link> </li>
//     <li> <Link to="/rain"> Make It Rain </Link> </li>
//     <li> <Link to="/moveit"> I like to move it move it </Link> </li>
//   </ul>
// </div>
