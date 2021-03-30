import React, { useState } from 'react';
import './Input.css';
const Input = ({addTask}) => {

const [inputValue , setInput] = useState('')


    return (
        <div>

        <form id="myDIV" onSubmit={(e)=> {

            e.preventDefault();
            
        addTask(inputValue);
        setInput('')
        
        }}  >

       <input type="text" value={inputValue}   onChange={(e)=> setInput(e.target.value)}    />


    <button  type="submit" className="addBtn " >ADD</button>

        </form>



            
        </div>
    )
}

export default Input
