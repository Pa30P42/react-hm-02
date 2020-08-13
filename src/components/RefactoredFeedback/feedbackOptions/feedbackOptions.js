import React from "react";

const FeedbackOptions = ({ changeValue }) => {
  return (
    <div>
      <h2>Please leave your feedback</h2>
      <button type="button" name="good" onClick={changeValue}>
        Good
      </button>
      <button type="button" name="neutral" onClick={changeValue}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={changeValue}>
        bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
