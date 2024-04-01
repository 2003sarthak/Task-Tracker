import React, { useEffect, useState } from 'react';
import { useArray } from "../data/ArrayContext";
import { useFilter } from "../data/FilterContext";
import TaskBox from '../UI/TaskBox';

const DefferedTasks = () => {
    const { globalArray } = useArray();
    const { filters } = useFilter();
    const assigneeName = filters.assigneeName;
    const priority = filters.priority;
    const sortBy = filters.sortBy;
    const [filteredTasks, setFilteredTasks] = useState([]);

    // Update filteredTasks whenever assigneeName, priority, or sortBy changes
    useEffect(() => {
        let newFilteredTasks = globalArray.filter(item => {
            // Check if assigneeName and priority match
            const isAssigneeMatch = assigneeName === '' || item.assignee.startsWith(assigneeName);
            const isPriorityMatch = priority === '' || item.priority === priority;

            return item.taskStatus === "Deffered" && isAssigneeMatch && isPriorityMatch;
        });
      
        // Sort the filtered array if sortBy is not an empty string
        if (sortBy !== '') {
            newFilteredTasks.sort((a, b) => {
                if (sortBy === 'priority') {
                    return a.priority.localeCompare(b.priority);
                } else if (sortBy === 'assigneeName') {
                    return a.assignee.localeCompare(b.assignee);
                }
                // Add more sorting conditions for other fields if needed
            });
        }

        setFilteredTasks(newFilteredTasks);
        
    }, [assigneeName, priority, sortBy, globalArray]); // Dependency on assigneeName, priority, sortBy, and globalArray

    return (
        <div>
            {/* Map over filteredTasks instead of globalArray */}
            {filteredTasks.map((item, index) => (
                <TaskBox key={index} item={item} index={index} />
            ))}
        </div>
    );
};

export default DefferedTasks;
