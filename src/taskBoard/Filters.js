import React from "react";
import FilteringOptions from "./FilteringOptions";

import classes from './Filters.module.css';
import Overlay from "../UI/Overlay";
import CreateTask from "../Tasks/CreateTask";
const Filters=()=>{
   return <div className={classes.row}>
    <div className={classes.column1}>
        <FilteringOptions></FilteringOptions>
       
    </div>
    <div className={classes.column2}>
        <Overlay><CreateTask></CreateTask></Overlay>
    </div>
   </div>;
}
export default Filters;