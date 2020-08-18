import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { value } = props;
  const { previousValue } = props;

  return (
    <div className="display-container" id="display-container">
      <p className="previous-calculation">{ previousValue }</p>
      <p>{ value }</p>
    </div>
  );
}

Display.defaultProps = {
  previousValue: '',
  value: '0',
};

Display.propTypes = {
  previousValue: PropTypes.string,
  value: PropTypes.string,
};
