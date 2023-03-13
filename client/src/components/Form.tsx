import React, { useState, useEffect } from 'react';

const Form: React.FC = () => {
  const [msg, setMsg] = useState('');

  const updateMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  }

  return (
    <form action="">
      <input type="text" onChange={(e) => updateMsg(e)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;