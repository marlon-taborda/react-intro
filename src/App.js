import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Router from './router';

function App() {
  const [count, setCount] = useState(0);
function increment(){
  setCount(count+1);
}


  return (
   <Router/>
  );
}

export default App;
