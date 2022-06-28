import { useState } from 'react';
import NewToDo from './components/NewToDo';
import './App.css';

const initialToDos = [{
  id: 1,
  task: "Prepare for midterm",
  checked: false
},
{
  id: 2,
  task: "Unload dishwasher",
  checked: false
},
{
  id: 3,
  task: "Unload dryer",
  checked: false
},
{
  id: 4,
  task: "Fold laundry",
  checked: false
},
{
  id: 5,
  task: "Build React app",
  checked: false
}];

function App() {
  const [toDos, setToDos] = useState(initialToDos); 

  const addNewTodoHandler = (todo) => {
    setToDos(prevTodos => {
      return [...prevTodos, todo];
    });
  };

  const onChangeHandler = (e, i) => {
    const checkList = [...toDos];
    checkList[i].checked = !e.target.checked;
  }

  return (
    <div className="App"> 
        {toDos.map((task, i) => (
          <div key={i} className="toDos-list">
            <input value={task.task} type="checkbox" onChange={(e) => onChangeHandler(e, i)}/>
            <label>{task.task}</label>
          </div>
        ))}

      <NewToDo onAddNewTodo = {addNewTodoHandler} />
    </div>
  );
}

export default App;
