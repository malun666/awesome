import React from 'react';
import './App.css';
import CssVar from './components/CssVar/CssVar';
import ProgressBar from './components/ProgressBar';
import CssGrid from './components/CssGrid';
function App() {
  return (
    <div>
      <CssGrid></CssGrid>
      <ProgressBar></ProgressBar>
      <CssVar></CssVar>
      <div className="loading">
        <span>loading...</span>
      </div>
    </div>
  );
}

export default App;
