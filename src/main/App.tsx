import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopMenuBar from './components/TopMenuBar';
import About from './routes/About';
import Home from './routes/Home';
import Services from './routes/Services';
import Volunteer from './routes/Volunteer';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <TopMenuBar loggedIn={false} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
