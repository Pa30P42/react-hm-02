import React from "react";

const Statistics = ({ total, percentage, good, bad, neutral }) => {
  return (
    <div className="statistics-container">
      <h2>Statistics</h2>
      <p>Good</p>
      <span name="good">{good}</span>
      <p>Neutral</p>
      <span name="neutral">{neutral}</span>
      <p>Bad</p>
      <span name="bad">{bad}</span>
      <p>Total</p>
      <span name="total">{total}</span>
      <p>Percentage</p>
      <span name="percentage">{total === 0 ? "0" : percentage}%</span>
    </div>
  );
};

export default Statistics;
