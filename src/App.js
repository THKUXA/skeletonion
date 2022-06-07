import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Mainpage from './Components/Mainpage/Mainpage';
import UsersAndRolesPage from './Components/UsersAndRoles/UsersAndRolesPage';
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
          <Route exact path = "/Admin/UsersAndRoles" element = {<UsersAndRolesPage />}/>
          
        </Routes>
        
        </div>
        

      </section>

    
      
    </Router>
  );
}

export default App;
