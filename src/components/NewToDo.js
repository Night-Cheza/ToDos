import { useState } from "react";
function NewToDo() {
    const [newTodo, setNewTodo] = useState(false);

    const handleChange= (event) => {
        setNewTodo(event.target.value);
    }

    const addToDo = () => {
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