import React from 'react'

 const Listtask = ({task,index,removeTask}) => {
  return (
    <div>
    <div className='list-container'>
        {task.title}
       
        <button onClick={() =>{removeTask(index)}} className='delete-btn'>Delete</button>
        
    </div>
    </div>
  )
}
export default Listtask