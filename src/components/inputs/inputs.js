import React, { Component } from "react";
import "./inputs.css";
class Inputs extends Component {
  state = {};
  render() {
    const { x, y, width, height } = this.props.inputData,
      { outerWidth, outerHeight } = this.props.outerBox;
    let maxX, maxY, maxWidth, maxHeight;
    maxWidth = outerWidth;
    maxHeight = outerHeight;
    if (x + width >= outerWidth) {
      maxX = x;
      maxWidth = width;
    }
    if (y + height >= outerHeight) {
      maxY = y;
      maxHeight = height;
    }

    console.log({ x, y, width, height, outerHeight, outerWidth });
    return (
      <div>
        <div className="input_container">
          <div className="input_text">INPUT</div>
          <div className="input_parent">
            <div>X-Coordinates</div>
            <input
              type="number"
              className="XCO"
              min="0"
              max={maxX}
              id="x"
              onChange={this.props.changeInputValues}
            />
          </div>
          <div className="input_parent">
            <div>Y-Coordinates</div>

            <input
              type="number"
              className="YCO"
              min="0"
              max={maxY}
              id="y"
              onChange={this.props.changeInputValues}
            />
          </div>
          <div className="input_parent">
            <div>Width</div>

            <input
              type="number"
              className="Width"
              min="0"
              max={maxWidth}
              id="width"
              onChange={this.props.changeInputValues}
            />
          </div>
          <div className="input_parent">
            <div>Height</div>

            <input
              type="number"
              className="Height"
              max={maxHeight}
              min="0"
              id="height"
              onChange={this.props.changeInputValues}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Inputs;
