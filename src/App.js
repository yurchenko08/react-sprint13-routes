import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Subtask1 from './components/Subtask1/Subtask1';
import Subtask2 from './components/Subtask2/Subtask2';
import ParamNum from './components/Subtask1/ParamNum';
import Subtask3 from './components/Subtask3/Subtask3';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import { useState } from 'react';
import Subtask4 from './components/Subtask4/Subtask4';

export default function App() {
  //subtask3
  const [inputValue, setInputValue] = useState('');
  const checkInputValue =
    inputValue % 2 === 0 && inputValue !== 'undefined' ? false : true;
  const link = checkInputValue ? 'subtask3' : '/';
  const guard = checkInputValue ? <Subtask3 /> : <Outlet />;

  //subtask4
  const navigate = useNavigate();
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      navigate('/subtask4');
    } else {
      navigate('');
    }
  };

  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <Link to={link}>Show protected information if</Link>
      <span>&nbsp;</span>
      <input
        size="5"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>{' '}
      is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{' '}
        <input type="checkbox" onChange={handleCheckboxChange}></input>
      </div>
      <Routes>
        <Route path="/subtask1" element={<Subtask1 />}>
          <Route path=":paramValue" element={<ParamNum />} />
        </Route>
        <Route path="subtask2" element={<Subtask2 />} />
        <Route path={link} element={guard} />
        <Route path="subtask4" element={<Subtask4 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
