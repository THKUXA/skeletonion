import React from 'react'
import List from '@mui/material/List'
import { ListItem, ListItemText } from '@mui/material'
import {Navigation} from 'react-minimal-side-navigation';
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import './Sidebar.css'
const Sidebar = ({}) => {
  return (
    <div class = "sidebar">
      <Navigation
            
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              
            }}

            items={[
              {
                title: 'Nordion',
                itemId: '/Nordion',
                             },
              {
                title: 'Home',
                itemId: '/Home',
                elemBefore: () => <HomeIcon/>

              },
              {
                title: 'Orders',
                itemId: '/Orders',
                elemBefore: () => <TableRowsIcon />
              },
              {
                title: 'Scheduler',
                itemId: '/Scheduler',
                elemBefore: () => <CalendarMonthIcon />
              },
              {
                title: 'Notifications',
                itemId: '/Notifications',
                elemBefore: () => <NotificationsActiveIcon />
              },
            ]}
          />
        
    </div>
  )
}

export default Sidebar