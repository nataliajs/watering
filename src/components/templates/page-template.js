import React from 'react'
import { Link } from 'react-router-dom'

import MainMenu from 'components/main-menu/main-menu'
import MainHeader from 'components/main-header/main-header'

export const PageTemplate = ({children})=> {
  return(
    <div className="">
      <MainHeader />
      <MainMenu />
      {children}
    </div>
  )
}
