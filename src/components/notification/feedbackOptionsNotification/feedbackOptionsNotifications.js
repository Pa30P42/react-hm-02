import React from "react";

const FeedbackOptionsNotification = ({ changeValue }) => {
  return (
    <div>
      <h2>Please leave your feedback</h2>
      <button type="button" name="good" onClick={() => changeValue("good")}>
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={() => changeValue("neutral")}
      >
        Neutral
      </button>
      <button type="button" name="bad" onClick={() => changeValue("bad")}>
        bad
      </button>
    </div>
  );
};

export default FeedbackOptionsNotification;
