import React from 'react';

// Importing components
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App() {
  return (
    <div id="calculator-container" className="calculator-container">
      <Display value="0" />
      <ButtonPanel />
    </div>
  );
}
