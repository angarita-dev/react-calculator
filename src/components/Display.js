import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { value } = props;

  return (
    <div className="display-container" id="display-container">
      <p>{ value }</p>
    </div>
  );
}

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};
