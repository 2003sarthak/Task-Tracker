import React, { useState } from 'react';
import classes from './Overlay.module.css'; // Import CSS file for styling

const Overlay = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div>
      <button className={classes.addButton} onClick={toggleOverlay}>ADD NEW TASK</button>
      {showOverlay && (
        <div className={classes.overlay}>
          <div className={classes.overlayContent}>
          <button onClick={toggleOverlay}>Close Overlay</button>
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Overlay;
