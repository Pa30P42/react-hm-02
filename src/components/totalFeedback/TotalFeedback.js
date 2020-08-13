import React, { Component } from "react";

class TotalFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };
  // this.countTotalFeedback()
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return Number((good / (bad + good + neutral)) * 100);
  }

  render() {
    return (
      <>
        <div>
          <h2>Please leave your feedback</h2>
          <button type="button" name="good" onClick={this.changeValue}>
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
          <p>Total</p>
          <span name="total">{this.countTotalFeedback()}</span>
          <p>Percentage</p>
          <span name="percentage">
            {this.countTotalFeedback() === 0
              ? "0"
              : this.countPositiveFeedbackPercentage()}
            %
          </span>
        </div>
      </>
    );
  }
}

export default TotalFeedback;
