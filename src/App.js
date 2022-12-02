import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Subtask1Param } from './components/Subtask1Param';
import { Subtask1 } from './components/Subtask1';
import { Subtask2 } from './components/Subtask2';
import { Subtask3 } from './components/Subtask3';

export default function App() {
  const [checkDigit, setCheckdigit] = useState(false);
  const [link, setLink] = useState('');
  const handleInput = (e) => {
    if (e.target.value % 2 === 1) {
      setCheckdigit(true);
      setLink('/subtask3');
    } else setCheckdigit(false);
  };
  return (
    <div className='App'>
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to={link}>Show protected information if</Link>
      <span>&nbsp;</span>
      <input onChange={handleInput} size='5'></input> is odd
      <div className='mainClass'>
        Go to the component programmatically, by checking the box:{' '}
        <input type='checkbox'></input>
      </div>
      <Routes>
        <Route path='/subtask1' element={<Subtask1 />}>
          <Route path=':param' element={<Subtask1 />} />
        </Route>
        <Route path='/subtask2' element={<Subtask2 />} />
        {checkDigit && <Route path={link} element={<Subtask3 />}></Route>}
      </Routes>
    </div>
  );
}
