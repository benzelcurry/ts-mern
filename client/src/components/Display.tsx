import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Message } from '../message.model';

const Display: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios.get<Message>('http://localhost:3001')
      .then((response) => {
        setMessages([...messages, response.data])
      });
  }, []);

  return (
    <ul>
      {
        messages.map(message =>
          <li key={Math.random()}>{message.message}</li>
        )
      }
    </ul>
  );
};

export default Display;