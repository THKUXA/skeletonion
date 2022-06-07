import React from 'react'
import {Navigation} from 'react-minimal-side-navigation';
import { Navigate, useLocation,useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupIcon from '@mui/icons-material/Group';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import './Sidebar.css'
const Sidebar = ({}) => {

  const location = useLocation()
  const navigate = useNavigate()
  
  return (
    <div class = "sidebar">
      <Navigation
            
            activeItemId={location.pathname}
            onSelect={({itemId}) => {
              navigate(itemId)
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
              {
                title: 'Admin',                
                elemBefore: () => <AdminPanelSettingsIcon />,
                subNav:[
                  {
                    title: 'Users and Roles',
                    itemId: '/Admin/UsersAndRoles',
                    elemBefore: () => <GroupIcon />
                  }
                ]
              

              },
             
            ]}
          />
        
    </div>
  )
}

export default Sidebar