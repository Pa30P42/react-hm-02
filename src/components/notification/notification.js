import React, { Component } from "react";
import SectionNotification from "./sectionsNotification/sectionsNotifications";

class Notification extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = (name) => {
    // const name = e.target.name;
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
        <SectionNotification
          changeValue={this.changeValue}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
        />
      </>
    );
  }
}

export default Notification;
