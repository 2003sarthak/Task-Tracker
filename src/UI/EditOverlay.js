import React, { useState } from 'react';
import { useSelectedContext } from '../data/SelectedContext';
import { useArray } from '../data/ArrayContext';
import styles from './EditOverlay.module.css'; // Import CSS module

const EditOverlay = () => {
  const {selectedTask,selectedOverlay,setSelectedTask,setOverlay}=useSelectedContext();
  const { globalArray ,setGlobalArray} = useArray();
  const selectedItem = globalArray.find(item => item.id === selectedTask);
  const [priority, setPriority] = useState(selectedItem?.priority || '');
  const [taskStatus, setTaskStatus] = useState(selectedItem?.taskStatus || '');

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update selected item in global array
    const updatedArray = globalArray.map(item => {
      if (item.id === selectedTask) {
        return {
          ...item,
          priority,
          taskStatus
        };
      }
      return item;
    });
    setGlobalArray(updatedArray);
    console.log(globalArray);
    setSelectedTask(null);
    setOverlay(0);
  };

  const handleReset = () => {
    setPriority(selectedItem?.priority || '');
    setTaskStatus(selectedItem?.taskStatus || '');
  };

  return (
    <div className={`${styles.overlay} ${selectedOverlay == 1? styles.active : ''}`}>
      <div className={styles['overlay-content']}>
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="task">Task:</label>
            <input type="text" id="task" value={selectedItem?.title || ''} readOnly />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={selectedItem?.description || ''} readOnly />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="team">Team:</label>
            <input type="text" id="team" value={selectedItem?.team || ''} readOnly />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="assignee">Assignee:</label>
            <input type="text" id="assignee" value={selectedItem?.assignee || ''} readOnly />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="priority">Priority:</label>
            <select id="priority" value={priority} onChange={handlePriorityChange}>
              <option value="p0">p0</option>
              <option value="p1">p1</option>
              <option value="p2">p2</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="status">Status:</label>
            <select id="status" value={taskStatus} onChange={handleStatusChange}>
              <option value="Deployed">Deployed</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className={styles['form-footer']}>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOverlay;
