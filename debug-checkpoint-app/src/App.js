import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Header />
<Display count={count} />  
      <Display />
    </div>
  );
}

export default App;
