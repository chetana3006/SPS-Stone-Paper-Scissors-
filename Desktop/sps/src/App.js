import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Home  from './Components/Home/Home';
import Labour from './Components/Labour/Labour';
import Safety from './Components/Safety/Safety';


import './App.css';
import React from 'react';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route  path="/"element={<Home/>}/>        
          <Route  path="/labour"element={<Labour/>}/>        
          <Route  path="/Safety"element={<Safety/>}/>        
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
