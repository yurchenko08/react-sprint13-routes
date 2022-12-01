import { useParams } from 'react-router-dom';
export function Subtask1Param() {
  const { param } = useParams();
  return <div>Subtask1, parameter: {param}</div>;
}
