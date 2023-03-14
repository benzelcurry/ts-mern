import React, { useState, useEffect } from 'react';
import axios from 'axios';

// let axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       "Access-Control-Allow-Origin": "*",
//   }
// };

const Form: React.FC = () => {
  const [msg, setMsg] = useState('');
  const [author, setAuthor] = useState('');
  const [numbers, setNumbers] = useState<number>();

  const updateMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  }

  const updateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  }

  const updateNumbers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers(Number(e.target.value));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:3001/', 
      { 
        msg: msg,
        author: author,
        numbers: numbers
      })
        .then((response) => {
          console.log(response);
        })
  }

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => updateMsg(e)} />
      <input type="text" onChange={(e) => updateAuthor(e)}/>
      <input type="number" onChange={(e) => updateNumbers(e)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;