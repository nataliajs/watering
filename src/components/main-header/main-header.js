import React from 'react'
import { NavLink } from 'react-router-dom'

import { ICONS } from 'constants/svg'

import Icon from 'components/icon'

function MainHeader(props){
  return(
    <div className="row main-header">
      <div className="col-12">
        <NavLink exact to="/" className="main-header_item" activeClassName="main-header_item--active">
          <Icon icon={ICONS.HOME} />
        </NavLink>
      </div>
    </div>
  )
}

export default MainHeader
