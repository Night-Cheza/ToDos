import React from "react";
import { useState } from "react";
import "./NewToDo.css";

function NewToDo(props) {
    const [newTodo, setNewTodo] = useState("");

    const handleChange= (event) => {
        setNewTodo(event.target.value);
    };

    const addToDo = (e) => {
        e.preventDefault();

        if(newTodo.trim().length !== 0) {
            const todoItem = {
                id:6,
                task:newTodo,
                checked: false
            };
            props.onAddNewTodo(todoItem);
        } else {
            alert("No todo to add");
        }        

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