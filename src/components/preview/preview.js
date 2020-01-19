import React, { Component } from "react";
import "./preview.css";
class Preview extends Component {
  state = {};

  render() {
    const { x, y, width, height } = this.props.inputData,
      { outerWidth, outerHeight } = this.props.outerBox;
    return (
      <div className="preview_parent">
        <div className="preview_text">PREVIEW</div>
        <div
          className="preview_outer_box"
          style={{ width: `${outerWidth}px`, height: `${outerHeight}px` }}
        >
          <div
            className="preview_inner_box"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              left: `${x}px`,
              bottom: `${y}px`
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Preview;
