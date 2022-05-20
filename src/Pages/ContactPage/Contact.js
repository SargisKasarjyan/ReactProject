import React, { useState } from "react";
import ToDo from "../../Componets/ToDo/ToDo";
import ToDoForm from "../../Componets/ToDoForm/ToDoForm";
import './Contact.css'

const Contact = () => {
    const [todos,setTodos] = useState([])
    
    const addTask = (userInput) => {
        if(userInput){
            const newItem = {
                id:Math.random().toString(32).substr(2,9),
                task: userInput,
                complete: false
            }
            setTodos([...todos,newItem])
            console.log(newItem);
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id )])
    }
    const handleToggle = (id)=> {
        setTodos([
            ...todos.map((todo) => 
            todo.id === id ? {...todo,complete : ! todo.complete}:{...todo}
            )
        ])
    }
    return (
        <div>
            <div>
                <h1>Chank: {todos.length}</h1>
            </div>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo)=>{
                 return (
                    <ToDo
                    todo={todo} 
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
            })}
           
        </div>
    );
}
export default Contact