import React from 'react';

import Display from './components/Display';
import Form from './components/Form';

const App: React.FC = () => {
  return (
    <div className="app">
      <Form />
      <Display />
    </div>
  );
};

export default App;
