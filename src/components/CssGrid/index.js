import React, { Component } from "react";
import './CssGrid.scss';

export default class CssGrid extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="css-grid">
        <div className="grid-demo-1">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
    );
  }
}