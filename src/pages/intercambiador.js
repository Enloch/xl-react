import React, { Component } from "react";

export class Intercambiador extends Component {
  render() {
    const WebglStyle = {
      border: "0",
      height: "100%",
      width: "100%",
      title: "Intercambiador",
    };
    return (
      <iframe
        src="https://itch.io/embed-upload/7108757?color=333333"
        allowfullscreen=""
        height={window.innerHeight}
        width={window.innerWidth}
        frameborder="0"
        title="Intercambiador"
      />
    );
  }
}

export default Intercambiador;
