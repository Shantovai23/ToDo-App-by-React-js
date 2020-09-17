
import React, { useState } from 'react'
import ToDoLists from './ToDoLists'

const App=()=>{

const [inputText,upInputText]=useState('')
const [fetchText,upfetchtext]=useState([]) //stored lists in a array

const inputEvent=(event)=>{
upInputText(event.target.value) //fetch the value from input
}
const addList=()=>{
  upfetchtext((oldItems)=>{
      
      const all= [...oldItems,inputText] //v1.0.1
      return [ ...new Set(all)] // delete duplicate value
        //stored lists in array,here olditems are prev value and inputtext is last value
  }) 
  upInputText('')
}
const deleteItems=(id)=>{
    // console.log('working')
    upfetchtext((oldItems)=>{
        return  oldItems.filter((ele,index)=>{  
        return index !==id  //if match the value then it will return full array without matched value
        
        })
    })
}
    return(
         <>
        <div className='main_div'>
        <div className='center_div'>
        <br/>
        <h1>ToDo App</h1>
        <br/>
        <input type='text' placeholder='Task' onChange={inputEvent} value={inputText}/>
        <button onClick={addList}>+</button>
        <ol>
            {fetchText.map((listValue,index)=>{
             return  <ToDoLists
              text={listValue}
               key={index}
                id={index}
                onSelect={deleteItems}   //these are props to connect with todolists component
                />
            })}
        </ol>
        </div>
        </div>
    </>
    )
}

export default App