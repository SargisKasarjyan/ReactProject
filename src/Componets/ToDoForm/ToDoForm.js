import { useState } from "react";
import './ToDoForm.css'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChang = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="lqlq" value={userInput} type="text" onChange={handleChang} onKeyDown={handleKeyPress} placeholder="Grel nshanakutyun@" />
            <button  className="wlwa" > Pahpanel </button>
        </form>
    )
}
export default ToDoForm