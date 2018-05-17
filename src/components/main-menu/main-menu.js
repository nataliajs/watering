import React from 'react'
import { NavLink } from 'react-router-dom'

function MainMenu(props){
  return(
    <nav className="main-menu">
      <NavLink to="/places" className="main-menu_item" activeClassName="main-menu_item--active">places</NavLink>
      <NavLink to="/user" className="main-menu_item" activeClassName="main-menu_item--active">user</NavLink>
    </nav>
  )
}

export default MainMenu
