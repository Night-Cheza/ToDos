import { useState } from "react";
import "./NewToDo.css";

function NewToDo(props) {
    const [newTodo, setNewTodo] = useState("");

    const handleChange= (event) => {
        setNewTodo(event.target.value);
    };

    const addToDo = (e) => {
        e.preventDefault();
        const todoItem = {
            id:6,
            task:newTodo,
            checked: false
        };

        props.onAddNewTodo(todoItem);

        setNewTodo("");
    };

    return(
        <div>
            <input type="text" onChange={handleChange} value={newTodo}></input>
            <button type="button" onClick={addToDo}>Add todo</button>
        </div>
    );
}

export default NewToDo;