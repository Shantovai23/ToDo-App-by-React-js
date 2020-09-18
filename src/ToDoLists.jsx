import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoLists=(props)=>{
    
    return (
        <>
        <div className='todo_style'>
          <DeleteIcon  className='fa fa-times' aria-hidden='true'
           onClick={()=>{
               props.onSelect(props.id) // delete lists event
           }} />
          <li>{props.text}</li> 
          </div>
        </>
    )
}

export default ToDoLists