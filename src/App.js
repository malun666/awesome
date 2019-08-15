import React from 'react';
import './App.css';
import CssVar from './components/CssVar/CssVar';
import ProgressBar from './components/ProgressBar';
import { Link, BrowserRouter,Route,Switch } from 'react-router-dom';
import Tab from './components/CssTab';
import Loading from './components/CssLoading';
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="link-wrap">
          <Link to="/tab">Tab</Link>|
          <Link to="/progressbar">progressbar</Link>|
          <Link to="/CssVar">CssVar</Link>|
          <Link to="/Loading">Loading</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/progressbar" component={ProgressBar} />
          <Route path="/CssVar" component={CssVar} />
          <Route path="/progressbar" component={ProgressBar}/>
          <Route path="/tab" component={Tab} />
          <Route path="/Loading" component={Loading} />
          <Route component={Loading} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
