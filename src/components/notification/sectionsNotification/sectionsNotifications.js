import React from "react";
import StatisticsNotification from "../statisticsNotifications/statisticsNotifications";
import FeedbackOptionsNotification from "../feedbackOptionsNotification/feedbackOptionsNotifications";

const SectionNotification = ({
  changeValue,
  total,
  percentage,
  good,
  bad,
  neutral,
}) => {
  return (
    <>
      <FeedbackOptionsNotification changeValue={changeValue} />
      <StatisticsNotification
        total={total}
        percentage={percentage}
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </>
  );
};

export default SectionNotification;
