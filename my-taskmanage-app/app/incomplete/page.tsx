"use client";
import React from 'react'

import { useGlobalState } from "../contex/globalProvider";
import Task from "../component/Task/Task";

function page() {
  const { incompleteTasks } = useGlobalState();
  return <Task title="Incomplete Tasks" tasks={incompleteTasks} />;
}

export default page