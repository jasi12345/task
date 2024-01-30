"use client" ;
import Image from "next/image";
import Task from "./component/Task/Task";
import { useGlobalState } from "./contex/globalProvider";

export default function Home() {
  const {tasks} =useGlobalState();
  return (
    
     <Task title ="All Tasks " tasks ={tasks} />
    
  );
}
