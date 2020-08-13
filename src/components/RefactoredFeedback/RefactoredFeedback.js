import React, { Component } from "react";

import Section from "./sections/section";

class RefactoredFeedback extends Component {
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
        <Section
          changeValue={this.changeValue}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
          good={this.state.good}
          bad={this.state.bad}
          netral={this.state.neutral}
        />
      </>
    );
  }
}

export default RefactoredFeedback;
