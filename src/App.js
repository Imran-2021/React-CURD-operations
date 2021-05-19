import React from 'react';
import Navber from './Components/LayOut/Navber';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/Pages/NotFound';

function App() {

  return (
    <Router>
      <Navber/>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
           <Contact/>
        </Route>
        <Route>
           <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
