import { useLocation } from 'react-router-dom';

function Subtask2() {
  const { search } = useLocation();
  const modifyStr = (search) => search.substr(1).split('&').join(', ');

  return <div>Subtask2, query parameters: {`${modifyStr(search)}`}</div>;
}

export default Subtask2;

// import { useLocation } from "react-router-dom";

// function Subtask2() {
//   const location = useLocation()

//   const search = location.search

//   const params = search.slice(1, search.length).split('&').join(', ')

//   return <div>Subtask2, query parameters: {params}</div>;
// }

// export default Subtask2;
