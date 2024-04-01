import React, { useState } from 'react';
import classes from "./TaskBox.module.css";
import { useSelectedContext } from '../data/SelectedContext';
const TaskBox = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const {setSelectedTask,  setOverlay}=useSelectedContext();
  const toggleOptions = () => {
    setShowOptions(prevState => !prevState);
  };

  const handleEdit = () => {
    // Implement edit functionality here
    setSelectedTask(props.item.id);
    setOverlay(1);
    
    
    setShowOptions(false); // Close the overlay after handling edit
  };

  const handleDelete = () => {
    setOverlay(2);
    setSelectedTask(props.item.id);
    setShowOptions(false); // Close the overlay after handling delete
  };
 
  return (
    <div className={classes.taskContainer}>
      <div className={classes.section1}>
        <div className={classes.title}>{props.item.title}</div>
        <div className={classes.priority}>{props.item.priority}</div>
      </div>
      <div className={classes.section2}>
        <div className={classes.description}>{props.item.description}</div>
      </div>
      <div className={classes.section3}>
        <div className={classes.assignee}>{props.item.assignee}</div>
        <div className={classes.overlay}>
          <button className={classes.button} onClick={toggleOptions}>Options</button>
          {showOptions && (
            <div className={classes.overlayContent}>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
      <div className={classes.section4}>
        <div className={classes.status}>{props.item.taskStatus}</div>
      </div>
    </div>
  );
}

export default TaskBox;
