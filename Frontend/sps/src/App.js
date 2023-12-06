import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Home  from './Components/Home/Home';
import Labour from './Components/Labour/Labour';

import './App.css';
import React from 'react';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route  path="/"element={<Home/>}/>        
          <Route  path="/labour"element={<Labour/>}/>        
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
