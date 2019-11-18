import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/4804-weather-sunny.json";

class Sun extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
  

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="controlled"
      on>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default Sun;
