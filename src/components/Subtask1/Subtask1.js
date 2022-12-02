import { useParams } from 'react-router-dom';

function Subtask1() {
  let params = useParams();
  return <div>Subtask1, parameter: {params.paramValue}</div>;
}

export default Subtask1;
