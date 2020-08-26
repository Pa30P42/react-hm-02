import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = (name) => {
    // const name = e.target.name;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    return (
      <>
        <div>
          <h2>Please leave your feedback</h2>
          <button
            type="button"
            name="good"
            onClick={() => this.changeValue("good")}
          >
            Good
          </button>
          <button type="button" name="neutral" onClick={this.changeValue}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.changeValue}>
            bad
          </button>
        </div>
        <div className="statistics-container">
          <h2>Statistics</h2>
          <p>Good</p>
          <span name="good">{this.state.good}</span>
          <p>Neutral</p>
          <span name="neutral">{this.state.neutral}</span>
          <p>Bad</p>
          <span name="bad">{this.state.bad}</span>
        </div>
      </>
    );
  }
}

export default Feedback;
