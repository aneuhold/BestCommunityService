import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import TopMenuBar from './components/TopMenuBar';
import About from './routes/About';
import Home from './routes/Home';
import Services from './routes/Services';
import Volunteer from './routes/Volunteer';

const App = (): JSX.Element => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#30c47e',
      },
    },
  });
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
