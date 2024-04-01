// import react from "react";
import classes from "./TaskBorad.module.css";
import Filters from "./Filters";
import Tasks from "./Tasks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// this component is main task borad component that pops up after the login by the user

const TaskBorad=()=>{
    return <div>
        {/* the two main div tags one is for the heading and other contain all the other content  */}
        <div className={classes.heading}>
            <div>Task Board</div> 
            <FontAwesomeIcon className={classes.icon} icon={faUserCircle} />
        </div>
        <div className={classes.mainContent}>
            {/* the two div tags inside the MainContent div tag are one for all the filterOptions and other is for Tasks */}
            <Filters></Filters>
            <Tasks></Tasks>
        </div>
    </div>;
};
export default TaskBorad;