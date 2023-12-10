import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Home  from './Components/Home/Home';
import Labour from './Components/Labour/Labour';

import './App.css';
import React from 'react';
import Charts from './Components/Charts/Charts';
import Equipment  from './Components/Equipment/Equipment';
// import { Chart } from 'chart.js';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route  path="/"element={<Home/>}/>        
          <Route  path="/labour"element={<Labour/>}/> 
          <Route path='/charts' element={<Charts/>} />      
          <Route path='/equipment' element={<Equipment/>} />      
          </Routes>
      </Router>
   
      
    </div>
  );
}

export default App;
