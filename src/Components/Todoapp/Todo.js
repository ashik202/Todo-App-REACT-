import React, { useEffect } from 'react'
import {useState} from "react"
import "./Todo.css"
import Addtask from "./Addtask"
import Listtask from "./Listtask"
 const Todo = () => {
    const[tasks,updatetask] = useState([])
    useEffect(()=>
    {document.title=`you have ${tasks.length} pending task`
  })
    const addTask = (title) =>{
      const newTask = [...tasks,{title}];
      updatetask(newTask)

    }
    const removeTask = (index) =>{
      const newTask = [...tasks]
      newTask.splice(index,1)
      updatetask(newTask)
    };
  return (

    <>
    <div className='container'>
    <div className='Heading'>Todo App</div>
    <div className='add-tak'><Addtask addTask={addTask}/></div>
    <div className='tasks'>
        {tasks.map((task,index) => (
            <Listtask  task={task} removeTask={removeTask} index={index} key={index} />

        ))}
        
        </div>
    
    </div>
    
    </>
  )
}
 export default Todo;