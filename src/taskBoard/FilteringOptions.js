import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./FilteringOptions.module.css";
import { useFilter } from "../data/FilterContext";

const FilterAndSortOptions = () => {
  const { filters, setFilters } = useFilter();


  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    updateFilter("startDate", startDate);
    updateFilter("endDate", endDate);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFilter(name, value);
  };

  

  return (
    <div className={classes.container}>
      <div className={classes.filterContainer}>
        <span>Filter by:</span>
        <input
          type="text"
          name="assigneeName"
          placeholder="Name"
          value={filters.assigneeName || ""}
          onChange={handleChange}
        />
        <select
          name="priority"
          value={filters.priority || ""}
          onChange={handleChange}
        >
          <option value="">Select Priority</option>
          <option value="p0">p0</option>
          <option value="p1">p1</option>
          <option value="p2">p2</option>
          <option value="p3">p3</option>
        </select>
        <div className={classes.date}>
          <DatePicker
            selected={filters.startDate}
            onChange={handleDateChange}
            startDate={filters.startDate}
            endDate={filters.endDate}
            selectsRange
            placeholderText="Select Date Range"
          />
          </div>
      </div>
      <div className={classes.sortContainer}>
        <span>Sort by:</span>
        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleChange}
        >
          <option value="">Select option</option>
          <option value="priority">priority</option>
          <option value="assigneeName">assignee</option>
          <option value="date">date</option>
        </select>
      </div>
    </div>
  );
};

export default FilterAndSortOptions;
