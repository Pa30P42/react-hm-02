import React from "react";

const Filter = ({ getFilterValue, filter }) => {
  return (
    <>
      <label>
        <input
          value={filter}
          type="text"
          name="filter"
          onChange={getFilterValue}
        />
      </label>
    </>
  );
};

export default Filter;
