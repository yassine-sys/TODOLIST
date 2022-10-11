import './App.css';
import ListTask from "./Component/ListTask";
import AddTask from "./Component/AddTask";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <br/>
      <div className="content">
      <AddTask/>
      <br/>
      <ListTask/>
      </div>
    </div>
  );
}

export default App;
