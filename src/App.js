import React from 'react';
import './App.css';
import CssVar from './components/CssVar/CssVar';

function App() {
  return (
    <div>
      <div className="loading">
        <span>loading...</span>
      </div>
      <CssVar></CssVar>
    </div>
  );
}

export default App;
