import { useParams } from 'react-router-dom';
export function Subtask1Param() {
  const { param } = useParams();
  console.log(param);
  return <div>Subtask1, parameter:{param}</div>;
}
