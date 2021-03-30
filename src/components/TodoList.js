import React , {useState} from 'react'
import Input from './Input'
const TodoList = () => {

const [todos , setTodos] = useState([])

const AddTodo=(newtodo)=> setTodos([ newtodo , ...todos]) ;



    return (
        <div>

<Input addTask={AddTodo}/>

<ul>

             { todos.map ((todo, i ) => (


              <li  key={i}  >{todo}  <button   onClick={()=> {

              let newvalue = prompt('enter new value') ;

              setTodos(todos.map((el,index) => index === i ? el=newvalue : el))


              }}   >Edit</button>   <button onClick={()=>setTodos(todos.filter((el,index) => index !== i  ))}    >X</button>    </li>


             ))








             }

</ul>




        </div>
    )
}

export default TodoList
