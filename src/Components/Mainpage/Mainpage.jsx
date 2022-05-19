import { InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState,useEffect } from 'react'
import './Mainpage.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';

const Mainpage = () => {
  const [site, setsite] = useState('Site-1');
  const [DateTime, setDateTime] = useState(new Date())

  const handleChange = (event) => {
    setsite(event.target.value);
  }

  useEffect(() => {
    setInterval(() => setDateTime(new Date()),1000);
  
  }, [])
  
  
  return (
    <section className='mainpagediv'>
       <div className='toppagediv'>
              
        <header className='timeetc2'>
           <section>

             <Select label = "Site"
               value = {site}
               onChange={handleChange}
               className = "selectsite">
                 <MenuItem value = {'Site-1'}>Site-1</MenuItem>
                 <MenuItem value = {'Site-2'}>Site-2</MenuItem>
                 <MenuItem value = {'Site-3'}>Site-3</MenuItem>
                 <MenuItem value = {'Site-4'}>Site-4</MenuItem>
                 <MenuItem value = {'Site-5'}>Site-5</MenuItem>
             </Select>
           </section>
           <div className='timeetc'>

             {' '}
             {DateTime.toLocaleDateString('en-GB', {
               day: 'numeric',
               month: 'short',
               year: 'numeric',
             })} 
             {' '}
             {DateTime.toLocaleString('en-US', {
               hour: 'numeric',
               minute: 'numeric',
               second: 'numeric',
               hour12: true,

             })}
             {' '}


             <NotificationsActiveIcon/>
             {' '}
             <PersonIcon/>
           </div>
         </header>
        </div>
        <h1>
          Notification Center
        </h1>
    </section>
  )
}

export default Mainpage