import {BrowserRouter as Router, 
  Switch,

  Route
  } from 'react-router-dom';

import React from 'react';
import Game from './Components/Game';
import Header from './Components/Navbar';
import Home from './Components/Home';
import Instructions from './Components/Instructions';


function App() {
  // return (
  //   <div className="App">
  //     <Header/>
  //     <Game />
     
  //   </div>
  // );
  return (
    <Router>
      <Header/>
      <Switch>
      
    <Route path='/home' exact>
      
        <Home />
        
      </Route>

      <Route path='/game' exact>
        <Game />
      </Route>
      
      <Route path='/instructions' exact>
        <Instructions />
      </Route>

      
      
    </Switch>
     
    
      
      
    </Router> 
      
    
  );

}

export default App;
