import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'

function App() {

  useEffect(()=>{
    fetch('/movies')
    .then(r=>r.json())
    .then(console.log)
  },[])
  return (
    <div className="App">
      <h1>Howdy it's me Brian</h1>
    </div>
  );
}

export default App;
