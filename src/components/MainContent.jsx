import React from 'react'
import Home from '../pages/Home'
import Statistic from '../pages/Statistic'
import User from '../pages/User'
import CMS from '../pages/CMS'

const MainContent = ( {currentMenu} ) => {
  return (
    <div>
        {currentMenu == 1 ? <Statistic/> : currentMenu == 2 ? <User/> : currentMenu == 3 ? <CMS/> : <Home/>}
    </div>
  )
}

export default MainContent