import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'

import HomePage from './page/homepage/homepage'


const Hats=()=>(<div><h1>HATS PAGE</h1><span>It Will come soon here</span></div>)

function App() {
  return (
    <div >
      
      <Switch>

      <Route component={HomePage} path='/' exact/>
      <Route component={Hats} path='/hats' />

      </Switch>

     
    </div>
  );
}

export default App;
