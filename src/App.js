import { useState } from 'react';
import Checkbox from './components/Checkbox';
import NewToDo from './components/NewToDo';
import './App.css';

const initialToDos = [{
  id: 1,
  task: "Prepare for midterm"
},
{
  id: 2,
  task: "Unload dishwasher"
},
{
  id: 3,
  task: "Unload dryer"
},
{
  id: 4,
  task: "Fold laundry"
},
{
  id: 5,
  task: "Build React app"
}];

function App() {
  const [toDos, setToDos] = useState(initialToDos);  

  const addNewTodoHandler = (todo) => {
    setToDos(prevTodos => {
      return [...prevTodos, todo];
    });
  };

  return (
    <div className="App">      
      <ul className="list">
        {toDos.map((item) => (
          <li><Checkbox /> {item.task}</li>
        ))}
      </ul>
      <NewToDo onAddNewTodo = {addNewTodoHandler} />
    </div>
  );
}

export default App;
