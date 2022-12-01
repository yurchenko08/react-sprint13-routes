import { useParams } from 'react-router-dom';
export function Subtask1Param() {
  const { param } = useParams();
  return param ? (
    <div>Subtask1, parameter:{param}</div>
  ) : (
    <div>Subtask1, parameter:</div>
  );
}
