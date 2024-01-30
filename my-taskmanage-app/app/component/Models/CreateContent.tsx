"use client";
import axios from 'axios';
import React,{useState} from 'react'
import toast from 'react-hot-toast';

function CreateContent() {
    const[title,setTitle] =useState("");
    const[description,setDescription]= useState("");
    const[date,setDate]= useState("");
    const[completed,setCompleted]= useState("false");
    const[important,setImportant] = useState("false");


    const handleChange = (name: string) => (e: any) => {
      console.log(e.target.value);
      switch (name) {
        case "title":
          setTitle(e.target.value);
          break;
        case "description":
          setDescription(e.target.value);
          break;
        case "date":
          setDate(e.target.value);
          break;
        case "completed":
          setCompleted(e.target.checked);
          break;
        case "important":
          setImportant(e.target.checked);
          break;
        default:
          break;
      }
    };
    const handleSubmit = async (e: any) => {
      e.preventDefault();

      const task = {
        title,
        description,
        date,
        completed,
        important,
      };
      try {
        const res = await axios.post("/api/tasks", task);
        if (res.data.error) {
          toast.error(res.data.error);
        }
        toast.success("you're task is ready to use");
      } catch (error) {
        toast.error("Something wrong.");
      console.log(error);
      }
    };

  return(

    <form onSubmit={handleSubmit}>
    <h1>Create Task</h1>
    <div className="input-control">
      <label htmlFor="title">Title</label>
      <input 
      type="text" 
      id="title"
      value={title}
     name="title"
      onChange={handleChange("title")}
      placeholder= "e.g, fireship video"
      />
    </div>
    <div className="input-control">
      <label htmlFor="description">Description</label>
      <textarea
      id="description"
      value={description}
      name="description"
      onChange={handleChange("description")}
      placeholder= "e.g, nextjs auth video"
      rows={4}
      >
        </textarea>
        <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="completed">Toggle Completed</label>
        <input
          value={completed.toString()}
          onChange={handleChange("completed")}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="important">Toggle Important</label>
        <input
          value={important.toString()}
          onChange={handleChange("important")}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>
      <div className="submit-btn ">
        <button
          type="submit">
            <span>Submit</span>
          </button>
          
        
      </div>

    </div>
    </form>
  ) ;
  
      
}

export default CreateContent; 