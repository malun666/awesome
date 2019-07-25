import React from 'react';
import './CssVar.css';

export default function CssVar() {
  function hanlerMove(e) {
    e.target.style.setProperty('--x', e.pageX - e.target.offsetLeft + 'px');
    e.target.style.setProperty('--y', e.pageY - e.target.offsetTop + 'px');
  }
  return (
    <div className="css-var">
      <div className="mbox" onMouseMove={hanlerMove}></div>
    </div>
  );
}