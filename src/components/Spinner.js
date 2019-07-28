import React from 'react';
import PropTypes from 'prop-types';
import styles from '../cssmods/Common.css';

const propTypes = {
  size: PropTypes.string.isRequired,
};

const defaultProps = {
  size: '32px',
};

const Spinner = ({size}) => {
  return (
    <div 
      className={[styles.loaderContainer, styles.flex, styles.center, styles.middle].join(' ')}>
      <div
        data-test='loader'
        className={styles.loader}
        style={{height: size, width: size}}
      />
    </div>
  )
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
