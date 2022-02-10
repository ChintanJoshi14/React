import './App.css';
import ToDo from './components/ToDo';

function App() {
  const tasks = [
    {
      description: "Buy new sweatshirt"
    },
    {
      description: "Begin promotional phase"
    },
    {
      description: "Read a article"
    },
    {
      description: "Try not to fall asleep"
    },
    {
      description: "Watch 'Sherlock'"
    },
    {
      description: "Begin QA for the product"
    },
    {
      description: "Go for a walk"
    },
  ];
  return (
    <div className="App">
      <ToDo items={tasks}/>
    </div>
  );
}

export default App;
