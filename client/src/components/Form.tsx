import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form: React.FC = () => {
  const [msg, setMsg] = useState('');

  const updateMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { message: msg };
    axios.post('http://localhost:3001', body);
  }

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => updateMsg(e)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;