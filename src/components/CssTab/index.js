import React from 'react';
import './CssTab.css';

export default function Tab() {
  return (
    <div className="tab">
      <a href="#tab1" className="tab-item">
        <div className="hd">hd-tab1</div>
        <div id="tab1" className="bd act">bd-tab1</div>
      </a>
      <a href="#tab2" className="tab-item">
        <div className="hd">hd-tab2</div>
        <div id="tab2" className="bd">bd-tab2</div>
      </a>
      <a href="#tab4" className="tab-item">
        <div className="hd">hd-tab3</div>
        <div id="tab3" className="bd">bd-tab3</div>
      </a>
      <a href="#tab4" className="tab-item">
        <div className="hd">hd-tab4</div>
        <div id="tab4" className="bd">bd-tab4</div>
      </a>
    </div>
  );
}