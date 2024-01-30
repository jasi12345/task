"use client";
import React from 'react'
import { useGlobalState } from "../contex/globalProvider";
import Task from "../component/Task/Task";

function page() {
  const { importantTasks } = useGlobalState();
  return <Task title="Important Tasks" tasks={importantTasks} />;
}


export default page