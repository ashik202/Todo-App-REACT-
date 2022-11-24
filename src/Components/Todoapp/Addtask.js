import React, { useState } from 'react'
import "./Todo.css"

 const Addtask = ({addTask}) => {
  const [value,setvalue]=useState()
  const add_value = () => {
   addTask(value);
   setvalue("");

  };
  return (
    <div>
        <div className='input-cotainer'>
            <input type="text"  className='input' placeholder='add Task' value={value}
            onChange={(e)=>{setvalue(e.target.value)}}
            
            />
            <button className='add_btn' onClick={add_value}>Add</button>

        </div>
    </div>
  )
}

export default Addtask