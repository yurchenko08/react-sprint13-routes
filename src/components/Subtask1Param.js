import { useParams } from 'react-router-dom';
export function Subtask1Param() {
  const { param } = useParams();
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
      <div>Subtask1, parameter: {param}</div>
    </div>
  );
}
