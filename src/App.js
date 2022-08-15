import {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)

  function IncreaseCount(){

    setCount(count + 1);
     
  }

  function DeIncreaseCount(){

    setCount(count - 1);
     
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={IncreaseCount}>IncreaseCount</button>
      <button onClick={DeIncreaseCount}>DeIncreaseCount</button>
    </div>
  );
}

export default App;
