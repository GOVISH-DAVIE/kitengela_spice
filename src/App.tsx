import React,{useEffect, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
const Add = React.lazy(()=>import('./components/math'))
// import {add} from './components/math';

function App() {
  useEffect(() => { 
   
     
  }, [])
  return (
    <Suspense fallback={
      <div>loading...</div>
    }>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Add />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Suspense>
  );
}

export default App;
