import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Mainpage from './Layouts/Mainpage/Mainpage';
import RolesAndPermsPage from './Layouts/RolesPage/RolesAndPermsPage';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


import React from 'react';


function App() {
  return (
    <Router>

    
      
      <section class='page-container'>
        
        <Sidebar/>
        <div style = {{marginLeft: 300, marginRight: 50}}>

        <Routes>
          <Route exact path = "/" element = {<Mainpage />} />
          <Route exact path = "/Notifications" element = {<Mainpage />} />
          <Route exact path = "/Admin/UsersAndRoles" element = {<RolesAndPermsPage />}/>
          
        </Routes>
        
        </div>
        

      </section>

    
      
    </Router>
  );
}

export default App;
