import React from 'react'
// import catImageSmall from '../images/cat-small.png'
import { Link } from "react-router-dom"


const Header = () => {

  return(

    <div className={"navBar"} style={{color: 'black'}}>
      <ul className={"no-vertical-margin"}>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/randomdots"> Random Dots </Link> </li>
        <li> <Link to="/rain"> Make It Rain </Link> </li>
        <li> <Link to="/moveit"> I like to move it move it </Link> </li>
      </ul>
    </div>

    )

}

export default Header
