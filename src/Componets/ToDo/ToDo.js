import './ToDo.css'


function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div className='vlv'  key={todo.id}>
            <div className="lll1" onClick={() => toggleTask(todo.id)}>{todo.task}</div>
            <div  className="lll"  onClick={() => removeTask(todo.id)}>X</div>
        </div>
    )
}
export default ToDo