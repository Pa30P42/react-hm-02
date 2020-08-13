import React from "react";
import FeedbackOptions from "../feedbackOptions/feedbackOptions";
import Statistics from "../statistics/statistics";

const Section = ({ changeValue, total, percentage, good, bad, neutral }) => {
  return (
    <>
      <FeedbackOptions changeValue={changeValue} />
      <Statistics
        total={total}
        percentage={percentage}
        good={good}
        bad={bad}
        netral={neutral}
      />
    </>
  );
};

export default Section;
