import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Subtask1Param } from './components/Subtask1Param';
import { Subtask1 } from './components/Subtask1';

export default function App() {
  return (
    <div className='App'>
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <a href='/'>Show protected information if</a>
      <span>&nbsp;</span>
      <input size='5'></input> is odd
      <div className='mainClass'>
        Go to the component programmatically, by checking the box:{' '}
        <input type='checkbox'></input>
      </div>
      <Routes>
        <Route path='/subtask1' element={<Subtask1 />} />
        <Route path='/subtask1/:param' element={<Subtask1Param />} />
      </Routes>
    </div>
  );
}
