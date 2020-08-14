import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { buttonName } = props;
  const { backgroundColor } = props;
  const { wide } = props;
  const style = backgroundColor ? { backgroundColor } : {}
  const buttonClass = wide ? 'button wide-button' : 'button';

  return (
    <div className={buttonClass} style={style}>
      <p>{ buttonName }</p>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
};
