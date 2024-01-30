"use client";
import React from 'react'
import styled from "styled-components";
import { useGlobalState } from '@/app/contex/globalProvider';
import CreateContent from '../Models/CreateContent';
import TaskItem from '../TaskItem/TaskItem';
import { add } from '@/app/utils/Icons';

interface Props {
    title: string;
    tasks: any[];
  }
function Task({ title, tasks }: Props) {
    const { theme, isLoading, openModal, modal } = useGlobalState();
    

  return (
  <TaskStyled theme ={theme}> 
  
  <h1>{title}</h1>
  <div className="taskgrid">
  {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
             />
        ))}
        <button className="create-task" onClick={openModal}>
          {add}
          Add New Task
        </button>
      </div>
  
  </TaskStyled>
  );
   
}
   const TaskStyled =styled.main`
 
   padding:2rem;
    width:100%;
    background-color:${(props) => props.theme.colorBg4};
    border:2px solid ${(props) => props.theme.borderColor2};
    border-radius:1rem;
    overflow-y:auto;
    height:100%;

    overflow-:auto;

    &::-webkit-scrollbar{
        width:0.5rem;
    }

    .tasks {
        margin: 2rem 0;
      }
    > h1 {
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-weight: 800;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 3rem;
            height: 0.2rem;
            background-color: ${(props) => props.theme.colorPrimaryGreen};
            border-radius: 0.5rem;
          }
        }
          .create-task {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        
            height: 16rem;
            color: ${(props) => props.theme.colorGrey2};
            font-weight: 600;
            cursor: pointer;
            border-radius: 1rem;
            border: 3px dashed ${(props) => props.theme.colorGrey5};
            transition: all 0.3s ease;
        
            i {
              font-size: 1.5rem;
              margin-right: 0.2rem;
            }
        
            &:hover {
              background-color: ${(props) => props.theme.colorBg4};
              color: ${(props) => props.theme.colorGrey0};
            }
    }
    `;


export default Task;