import React, { Component } from "react";
import Inputs from "./components/inputs/inputs";
import Preview from "./components/preview/preview";
import "./App.css";

class App extends Component {
  state = {
    outerBox: {
      outerWidth: 400,
      outerHeight: 200
    },
    inputData: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  };

  changeValues = e => {
    // console.log("ID::::", e.target.id, "Value:::", e.target.value);
    let id = e.target.id,
      value = e.target.value;
    this.setState(prevState => ({
      inputData: {
        ...prevState.inputData,
        [id]: +value
      }
    }));
  };

  render() {
    const { inputData, outerBox } = this.state;
    return (
      <div className="App">
        <Inputs
          changeInputValues={this.changeValues}
          inputData={inputData}
          outerBox={outerBox}
        />
        <Preview inputData={inputData} outerBox={outerBox} />
      </div>
    );
  }
}

export default App;
