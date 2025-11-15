import './App.css';
import { useState } from 'react';
import Header from './header';

/* 
  ODD uid : quetion 1 -> counter app  and 3 -> Prop Drilling without Context API; 
*/



function App() {
  const [count, setCount] = useState(0);
  function onClick(){
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    
      <Header userName="Subh"/>
    </div>
  );
}
export default App;
