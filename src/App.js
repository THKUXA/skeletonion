import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Mainpage from './Components/Mainpage/Mainpage';

import React from 'react';


function App() {
  return (
    <section class='page-container'>
      
      <Sidebar/>
      <Mainpage />
      
    </section>
  );
}

export default App;
