import React, { useState } from "react";
import { useArray } from "../data/ArrayContext";
import styles from "./CreateTask.module.css"; // Import CSS module

const CreateTask = () => {
  const { globalArray, addToArray } = useArray();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
    taskStatus: "assign",
  });

  // Counter to generate unique IDs
  const [counter, setCounter] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const submithandler = (e) => {
    e.preventDefault();

    // Generate unique ID
    const uniqueId = `task_${counter}`;

    // Increment counter for the next ID
    setCounter(prevCounter => prevCounter + 1);

    // Get the current date
    const currentDate = new Date().toISOString();

    // Format current date
    const creationDate = formatDate(currentDate);

    // Add the unique ID and creation date to the form data
    const newData = {
      ...formData,
      id: uniqueId,
      creationDate: creationDate,
    };

    // Add the task to the array
    addToArray(newData);
    console.log(globalArray);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create a New Task</h2>
      <form onSubmit={submithandler}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="team">Team:</label>
          <input
            type="text"
            id="team"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="assigns">Assigns:</label>
          <input
            type="text"
            id="assigns"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="p0">p0</option>
            <option value="p1">p1</option>
            <option value="p2">p2</option>
            <option value="p3">p3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
