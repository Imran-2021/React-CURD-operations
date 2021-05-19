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
import Footer from './Components/LayOut/Footer';
import AddUser from './Users/AddUser';

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
        <Route exact path="/users/add">
           <AddUser/>
        </Route>
        <Route>
           <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
