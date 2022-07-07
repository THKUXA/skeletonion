import React, { useEffect, useState } from 'react'
import DetailsReadings from '../../Components/QADosimetry/DetailsReadings/DetailsReadings'
import DoseMap from '../../Components/QADosimetry/DoseMap/DoseMap'
import ScatterPlot from '../../Components/QADosimetry/ScatterPlot/ScatterPlot'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import { InputLabel, MenuItem, Select } from '@mui/material'
import './QADosimetry.css'
import DosimeterReader from '../../Components/QADosimetry/DosimeterReader/DosimeterReader';
const QADosimetry = ({boxes}) => {
    const [site, setsite] = useState('Site-1');
    const [DateTime, setDateTime] = useState(new Date())

  const handleChange = (event) => {
    setsite(event.target.value);
  }

  useEffect(() => {
    setInterval(() => setDateTime(new Date()),1000);
  
  }, [])
  return (    
      <>
      <div className='parent'>
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
        <div className='title'>Dosimetry</div>
        <div className='dataparent'>
            
            <div className='dosimeterreader'>
            <DosimeterReader />

            </div>
            <div style = {{width:'656px', height: '656px'}}>
            <ScatterPlot boxes = {boxes} />
            </div>
            <div className='drdm'>

                <DoseMap boxes={boxes}/>
                <DetailsReadings />
            </div>

            </div>
    </div>
    </>   
  )
}

export default QADosimetry