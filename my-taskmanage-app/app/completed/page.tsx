"use client";
import React from 'react'
import { useGlobalState } from "../contex/globalProvider";
import Task from "../component/Task/Task";
  
function page() {
    const { completedTasks } = useGlobalState();
  
    return <Task title="Completed Tasks" tasks={completedTasks} />;                                                                 
}
export default page;