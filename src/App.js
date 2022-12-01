import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Subtask1Param } from './components/Subtask1Param';
import { Subtask1 } from './components/Subtask1';

export default function App() {
  return (
    <Routes>
      <Route path='/subtask1' element={<Subtask1 />} />
      <Route path='/subtask1/:param' element={<Subtask1Param />} />
    </Routes>
  );
}
