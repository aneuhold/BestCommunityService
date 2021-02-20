import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { LocalizationProvider } from '@material-ui/lab';
import DateFnsUtils from '@material-ui/lab/AdapterDateFns';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import TopMenuBar from './components/TopMenuBar';
import About from './routes/About';
import Home from './routes/Home';
import Services from './routes/Services';
import Volunteer from './routes/Volunteer';
import Login from './routes/Login';
import Calendar from './routes/Calendar';
import Donations from './routes/Donations';
import SpaceReservation from './routes/SpaceReservation';
import CateringSignUp from './routes/CateringSignUp';

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
      <StyledEngineProvider injectFirst>
        <LocalizationProvider dateAdapter={DateFnsUtils}>
          <MuiThemeProvider theme={theme}>
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
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/calendar">
                  <Calendar />
                </Route>
                <Route path="/donations">
                  <Donations />
                </Route>
                <Route path="/space-reservation">
                  <SpaceReservation />
                </Route>
                <Route path="/catering-sign-up">
                  <CateringSignUp />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </MuiThemeProvider>
        </LocalizationProvider>
      </StyledEngineProvider>
    </Router>
  );
};

export default App;
