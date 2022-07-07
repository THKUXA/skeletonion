import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Mainpage from './Layouts/Mainpage/Mainpage';
import RolesAndPermsPage from './Layouts/RolesPage/RolesAndPermsPage';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import React, { useRef, useState } from 'react';
import QADosimetry from './Layouts/QADosimetry/QADosimetry';


function App() {

  const boxes = Array(40).fill().map(() => [(Math.round(Math.random() * 45)-22.5),(Math.round(Math.random() * 45)-22.5),(Math.round(Math.random() * 45)-22.5)])
  return (


    <Router>

    
      
      <section class='page-container'>
        
        <Sidebar/>
        <div style = {{marginLeft: 300, marginRight: 50, height: "100vh"}}>

        <Routes>
          <Route exact path = "/" element = {<Mainpage />} />
          <Route exact path = "/Notifications" element = {<Mainpage />} />
          <Route exact path = "/Admin/RolesAndPermissions" element = {<RolesAndPermsPage />}/>
          <Route exact path = "/QA/Dosimetry" element  = {<QADosimetry boxes = {boxes}/>} />

          
        </Routes>
        
        </div>
        

      </section>

    
      
    </Router>

  );
}

export default App;
