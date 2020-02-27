import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTimeout(() =>{
      document.title = `Current Count ${count}`
      setCount(count + 1)
    }, 1000)
  }, [count])

  //   document.title = `Todo Changed ${count}`
  // }, [todos])
  
  // useEffect(() => {
  //   document.title = `Current Count ${count}`
  // }, [count])

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick= {()=> setCount (count + 1)}>+</button>
      <button onClick= {()=> setCount (count - 1)}>-</button>
    </div>
  );
}

export default App;
