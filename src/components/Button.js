import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName } = props;

  return (
    <div className="button">
      <p>{ buttonName }</p>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
