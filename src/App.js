import { useState } from 'react';
import Checkbox from './components/Checkbox';
import NewToDo from './components/NewToDo';
import './App.css';

const initialToDos = [{
  id: 1,
  todo: "Prepare for midterm"
},
{
  id: 2,
  todo: "Unload dishwasher"
},
{
  id: 3,
  todo: "Unload dryer"
},
{
  id: 4,
  todo: "Fold laundry"
},
{
  id: 5,
  todo: "Build React app"
}];

function App() {

  const [toDos, setToDos] = useState(initialToDos);  

  return (
    <div className="App">      
      <ul className="list">
        {toDos.map((item) => (
          <li {...setToDos}><Checkbox /> {item.todo}</li>
        ))}
      </ul>
      <NewToDo />
    </div>
  );
}

export default App;
