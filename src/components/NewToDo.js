import { useState } from "react";
function NewToDo() {
    const [newTodo, setNewTodo] = useState(false);

    const todo = {
        id: 6,
        todo: newTodo
    }

    const handleChange= (event) => {
        setNewTodo(event.target.value);
    }

    const addToDo = (submittedToDos) => {
        const item = {
            ...submittedToDos, todo
        };

        setNewTodo(true);
    };

    return(
        <div>
            <input type="text" onChange={handleChange}></input>
            <button type="button" onClick={addToDo}>Add todo</button>
        </div>
    );
}

export default NewToDo;