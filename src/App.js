import React from 'react';
import './App.scss';
import Home from './components/Home/Home'
import Products from './components/products/Products'
import Details from './components/Details/Details'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
        <Switch>
          <Route path="/Details" component={Details}/>
          <Products/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
