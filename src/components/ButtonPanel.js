import React from 'react';

// Importing component
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel" id="button-panel">
      <div id="g1-buttons" className="button-row">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="÷" backgroundColor="#ff9d14"/>
      </div>
      <div id="g2-buttons" className="button-row">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="×" backgroundColor="#ff9d14"/>
      </div>
      <div id="g3-buttons" className="button-row">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" backgroundColor="#ff9d14"/>
      </div>
      <div id="g4-buttons" className="button-row">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" backgroundColor="#ff9d14"/>
      </div>
      <div id="g5-buttons" className="button-row">
        <Button buttonName="0" wide={true} />
        <Button buttonName="." />
        <Button buttonName="=" backgroundColor="#ff9d14"/>
      </div>
    </div>
  );
}
