import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Subtask1 from './components/Subtask1/Subtask1';
import Subtask2 from './components//Subtask2/Subtask2';
import Subtask3 from './components/Subtask3/Subtask3';
import Subtask4 from './components/Subtask4/Subtask4';

export default function App() {
  const [checkDigit, setCheckdigit] = useState(false);
  const [link, setLink] = useState('');
  const handleInput = (e) => {
    if (e.target.value % 2 === 1) {
      setCheckdigit(true);
      setLink('/subtask3');
    } else setCheckdigit(false);
  };
  const navigate = useNavigate();
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      navigate('/subtask4');
    } else {
      navigate('');
    }
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
        <input type='checkbox' onChange={handleCheckboxChange}></input>
      </div>
      <Routes>
        <Route path='/subtask1' element={<Subtask1 />}>
          <Route path=':paramValue' element={<ParamNum />} />
        </Route>
        <Route path='/subtask2' element={<Subtask2 />} />
        {checkDigit && <Route path={link} element={<Subtask3 />}></Route>}
        <Route path='subtask4' element={<Subtask4 />} />
      </Routes>
    </div>
  );
}
