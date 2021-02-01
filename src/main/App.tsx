import React from 'react';
import './App.css';
import TopMenuBar from './components/TopMenuBar';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TopMenuBar loggedIn={false} />
    </div>
  );
};

export default App;
