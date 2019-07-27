import React from "react";
import PropTypes from 'prop-types';

const Images = props => (
  <div data-test='Images'>
    
  </div>
);

export const defaultProps = {
  fill: "currentColor"
}

Images.defaultProps = defaultProps

Images.prototype = {
  fill: PropTypes.string.isRequired,
}

export default Images;