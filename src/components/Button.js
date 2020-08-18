import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { wide } = props;
  const { buttonName } = props;
  const { backgroundColor } = props;
  const { clickHandler } = props;

  const handleClick = () => clickHandler(buttonName);
  const buttonClass = wide ? 'button wide-button' : 'button';

  return (
    <div
      className={buttonClass}
      style={{ backgroundColor }}
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
      role="button"
    >
      <p>{ buttonName }</p>
    </div>
  );
}

Button.defaultProps = {
  wide: false,
  backgroundColor: '#e9e9e9',
};

Button.propTypes = {
  wide: PropTypes.bool,
  backgroundColor: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
