import React, { useState } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    HomeIcon,
    UserGroupIcon,
    ChartBarIcon,
    BuildingStorefrontIcon
  } from "@heroicons/react/24/solid";
import MainContent from './MainContent';

const Sidebar = () => {

  const [currentMenu, setCurrentMenu] = useState(0)

  return (
    <>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
      </button>
      <aside id="default-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <List>
            <ListItem onClick={()=>{
              setCurrentMenu(0)
              console.log("ini home")
            }}>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
            <ListItem onClick={()=>{
              setCurrentMenu(1)
              console.log("ini statistic")
            }}>
              <ListItemPrefix>
                <ChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Statistic
            </ListItem>
            <ListItem onClick={()=> setCurrentMenu(2)}>
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5" />
              </ListItemPrefix>
              User
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem onClick={()=> setCurrentMenu(3)}>
              <ListItemPrefix>
                <BuildingStorefrontIcon className="h-5 w-5" />
              </ListItemPrefix>
              CMS
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
          </List>
        </div>
      </aside>
      <div className='p-4 sm:ml-64'>
          <MainContent currentMenu={currentMenu}/>  
      </div>
    </>
   
  )
}

export default Sidebar