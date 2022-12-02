import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Subtask1Param } from './components/Subtask1Param';
import { Subtask1 } from './components/Subtask1';
import { Subtask2 } from './components/Subtask2';
import { Subtask3 } from './components/Subtask3';

export default function App() {
  const digit = { odd: '/subtask3', even: '/' };
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='App'>
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <a href={+value % 2 !== 0 ? digit.odd : digit.even}>
        Show protected information if
      </a>
      <span>&nbsp;</span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size='5'
      ></input>{' '}
      is odd
      <div className='mainClass'>
        Go to the component programmatically, by checking the box:{' '}
        <input type='checkbox'></input>
      </div>
      <Routes>
        <Route path='subtask1' element={<Subtask1 />} />
        <Route path='/subtask1/:param' element={<Subtask1Param />} />
        <Route path='/subtask2' element={<Subtask2 />} />
        <Route path='/subtask3' element={<Subtask3 />} />
      </Routes>
    </div>
  );
}
