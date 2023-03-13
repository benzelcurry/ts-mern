import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Message } from '../message.model';

const Display: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then((response) => {
        setMessages(response.data)
      });
  }, []);

  return (
    <ul>
      { messages.length > 0 ? 
        messages.map(message =>
          <li key={Math.random()}>{message.message}</li>
        )
        : null
      }
    </ul>
  );
};

export default Display;