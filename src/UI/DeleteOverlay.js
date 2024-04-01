import React from 'react';
import { useSelectedContext } from '../data/SelectedContext';
import styles from './DeleteOverlay.module.css'; // Import CSS module
import { useArray } from '../data/ArrayContext';
const DeleteOverlay = () => {
  const { selectedTask, selectedOverlay, setSelectedTask,setOverlay } = useSelectedContext();
  const { globalArray,setGlobalArray}=useArray();
  const handleDelete = () => {
    // Filter out the item with id equal to selectedTask from the globalArray
    const updatedArray = globalArray.filter(item => item.id !== selectedTask);
    setGlobalArray(updatedArray);
    setOverlay(0); // Close overlay after deletion
    setSelectedTask(null);
  };

  const handleCancel = () => {
    setOverlay(0);
    setSelectedTask(null); // Close overlay without deleting
  };

  return (
    <div className={`${styles.overlay} ${selectedOverlay == 2 ? styles.active : ''}`}>
      <div className={styles['overlay-content']}>
        <h2>Delete Task</h2>
        <p>Do you want to delete task "{selectedTask}"?</p>
        <div className={styles['button-container']}>
          <button onClick={handleDelete} className={styles.yes}>Yes</button>
          <button onClick={handleCancel} className={styles.no}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOverlay;
