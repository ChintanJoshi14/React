import './App.css';
import ToDo from './components/ToDo';
import React, { useState } from 'react';


const DUMMY_TASKS = [
  {
    id:1,
    description: "Buy new sweatshirt",
  },
  {
    id:2,
    description: "Begin promotional phase"
  },
  {
    id:3,
    description: "Read a article"
  },
  {
    id:4,
    description: "Try not to fall asleep"
  },
  {
    id:5,
    description: "Watch 'Sherlock'"
  }
];

function App() {

  const [tasks, setTasks] = useState(DUMMY_TASKS);
  

  function addTaskHandler(task) {
    setTasks((prevTask) => {
      return [task, ...prevTask];

    })

  }


  return (
    <div className="App">
      <ToDo items={tasks} onAddTask={addTaskHandler} />
    </div>
  );
}

export default App;
