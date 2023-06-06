import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const initialState = {
  counter:0
}
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)

const handleIncre = () =>{
  dispatch({type: "INCREMENT"});
}

const hnadleDecre = () =>{
  dispatch({type : "DECREMENT"})
}


  return (
    <div id="main">
       <span id='counter'>{state.counter}</span>
      <button id='increment-btn' onClick={handleIncre}>Increment</button>
      <button id='decrement-btn' onClick={hnadleDecre}>Decrement</button>

    </div>
  )
}


export default App;
