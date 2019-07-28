import React from 'react';
import './App.css';
import CssVar from './components/CssVar/CssVar';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div>
      <ProgressBar></ProgressBar>
      <CssVar></CssVar>
      <div className="loading">
        <span>loading...</span>
      </div>
    </div>
  );
}

export default App;
