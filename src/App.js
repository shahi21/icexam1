import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/ab';
import Menu from './components/menu';
import Navbar from './components/Navbarpage';
import { BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap"

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        {/* Include your header component here */}

        {/* Content */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/Navbarpage" component={Navbar}/>
        </Switch>

        {/* Footer */}
        {/* Include your footer component here */}
      </div>
    </Router>
  );
}

export default App;
