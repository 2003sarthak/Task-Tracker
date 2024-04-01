import React from "react";
import PendingTasks from "../Tasks/PendingTasks";
import classes from "./Tasks.module.css";
import DefferedTasks from "../Tasks/DefferedTask";
import DeployedTasks from "../Tasks/DeployedTask";
import CompletedTasks from "../Tasks/CompletedTask";
import InProgressTasks from "../Tasks/InProgressTask";
const Tasks = () => {
  return (
    <div className={classes.columnsContainer}>
      <div className={classes.column}>
        <div className={classes.taskhead}>Pending</div>
        <div className={classes.content}>
          <PendingTasks></PendingTasks>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.taskhead}>In Progress</div>
        <div className={classes.content}>
         <InProgressTasks></InProgressTasks>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.taskhead}>Completed</div>
        <div className={classes.content}>
          <CompletedTasks></CompletedTasks>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.taskhead}>Deployed</div>
        <div className={classes.content}>
          <DeployedTasks></DeployedTasks>
        </div>
      </div>
      <div className={classes.column}>
        <div className={classes.taskhead}>Deffered</div>
        <div className={classes.content}>
          <DefferedTasks></DefferedTasks>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
