import React from 'react';
import PropTypes from 'prop-types';

// Importing component
import Button from './Button';

export default function ButtonPanel(props) {
  const { clickHandler } = props;

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="button-panel" id="button-panel">
      <div id="g1-buttons" className="button-row">
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button buttonName="÷" backgroundColor="#ff9d14" clickHandler={handleClick} />
      </div>
      <div id="g2-buttons" className="button-row">
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button buttonName="×" backgroundColor="#ff9d14" clickHandler={handleClick} />
      </div>
      <div id="g3-buttons" className="button-row">
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button buttonName="-" backgroundColor="#ff9d14" clickHandler={handleClick} />
      </div>
      <div id="g4-buttons" className="button-row">
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button buttonName="+" backgroundColor="#ff9d14" clickHandler={handleClick} />
      </div>
      <div id="g5-buttons" className="button-row">
        <Button buttonName="0" clickHandler={handleClick} wide />
        <Button buttonName="." clickHandler={handleClick} />
        <Button buttonName="=" backgroundColor="#ff9d14" clickHandler={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
