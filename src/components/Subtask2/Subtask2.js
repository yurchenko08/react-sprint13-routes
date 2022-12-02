import { useLocation } from 'react-router-dom';

function Subtask2() {
  const queryString = require('query-string');
  const location = useLocation();
  console.log(location);
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  function res() {
    const str = [];
    for (let key in parsed) {
      const keyInd = key;
      const valueKeyInd = parsed[key];
      str.push(` ${keyInd}=${valueKeyInd}`);
    }
    return str;
  }

  return <div>Subtask2, query parameters:{`${res(parsed)}`}</div>;
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
