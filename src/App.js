import React from 'react';
import { Route, Link, } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './components/UserLogin';
import Register from './components/RegisterUser';
import Jokes from './components/JokeList';
import Home from './components/HomePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    hello world
      </header>
      <PrivateRoute path="/protected" component={Jokes} />     
     <Route  exact path="/" component={Home}/>
     <Route   path="/login" component={Login}/>
     <Route   path="/register" component={Register}/>
     
    </div>
  );
}

export default App;
