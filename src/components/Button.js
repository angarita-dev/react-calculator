import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { wide } = props;
  const { buttonName } = props;
  const { backgroundColor } = props;
  const buttonClass = wide ? 'button wide-button' : 'button';

  return (
    <div className={buttonClass} style={{ backgroundColor }}>
      <p>{ buttonName }</p>
    </div>
  );
}

Button.defaultProps = {
  wide: false,
  backgroundColor: '#e9e9e9',
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
};
