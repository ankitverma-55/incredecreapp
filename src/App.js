import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// let count=0;
//const[count,setCount]=useState(count);
// function decreasehandler()
// {
//   setCount(count-1);

// }
function App() {
const[count,setCount]=useState(0);
function decreasehandler()
{
  setCount(count-1);

}
function increasehandler()
{
  setCount(count+1);
}
function restehandler()
{
  setCount(0);
}
  return (
    <div class="container">
    <button id='add' onClick={increasehandler}>+
    </button>
    <span>{count}</span>
    <button id='add' onClick={decreasehandler}>-
    </button>
    <button id="reset" onClick={restehandler}>reset</button>

    </div>
  );
}

export default App;
