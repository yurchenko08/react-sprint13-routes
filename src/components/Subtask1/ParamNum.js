import { useParams } from 'react-router-dom';

function ParamNum() {
  let params = useParams();

  return <div>{params.paramValue}</div>;
}

export default ParamNum;
