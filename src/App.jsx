// App.jsx

import React from 'react';
import Counter from './Counter'; // Importing Counter without curly braces since it's exported as default

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
