import React, { useEffect, useRef, useState } from "react";
import Gantt from "frappe-gantt";
import "frappe-gantt/dist/frappe-gantt.css";
import { NavLink } from "react-router-dom";

const GanttChart = () => {
    const ganttRef = useRef(null);
    const [tasks, setTasks] = useState([
        {
            id: "Task 1",
            name: "Design Phase",
            start: "2024-10-01",
            end: "2024-10-05",
            progress: 20,
            dependencies: "",
        },
        {
            id: "Task 2",
            name: "Development Phase",
            start: "2024-10-06",
            end: "2024-10-20",
            progress: 50,
            dependencies: "Task 1",
        },
        {
            id: "Task 3",
            name: "Testing",
            start: "2024-10-21",
            end: "2024-10-30",
            progress: 10,
            dependencies: "Task 2",
        },
    ]);

    useEffect(() => {
        if (ganttRef.current) {
            const gantt = new Gantt(ganttRef.current, tasks, {
                on_click: (task) => {
                    console.log(task.name + " clicked");
                },
                on_date_change: (task, start, end) => {
                    console.log(task.name + " date changed");
                },
                on_progress_change: (task, progress) => {
                    console.log(task.name + " progress changed to " + progress);
                },
                on_view_change: (mode) => {
                    console.log("View mode changed to " + mode);
                },
            });
        }
    }, [tasks]);

    return (
        <div className="md:px-8 px-4">
            <div className='flex space-x-6 items-center border-b -pb-1'>
                <h5 className='font-semibold text-lg'>Project Schedule</h5>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to="/pm/schedule">List</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-[3px] border-orange-400 pb-1' : 'pb-1')} to="/pm/gantt">Gantt</NavLink>
            </div>
            <div ref={ganttRef}></div>
        </div>
    );
};

export default GanttChart;
