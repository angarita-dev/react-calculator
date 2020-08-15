import React from 'react';

// Importing component
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel" id="button-panel">
      <div id="g1-buttons">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" />
      </div>
      <div id="g2-buttons">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="X" />
      </div>
      <div id="g3-buttons">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </div>
      <div id="g4-buttons">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </div>
      <div id="g5-buttons">
        <Button buttonName="0" />
        <Button buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
}
