import React from "react";
import PropTypes from 'prop-types';
import styles from '../../cssmods/Main.css';

const Theme = (props) => {
  const { tokens, onThemeChange } = props
  return (
    <div className={styles.themeContainer}>
      <div
        data-test='Theme'
        className={styles.theme}
      >
        {
          Object.keys(tokens).map(token => {
            return(
              <div
                key={token}
                title={token}
                data-test='themeOptions'
                onClick={() => onThemeChange(token)}
                style={{backgroundColor: tokens[token].primary}}
                className={styles.themeOptions}
              >
              </div>
            )
          })
        }
      </div>
      <p className={styles.themeText}>change theme</p>
    </div>

  )
}

Theme.prototype = {
  tokens: PropTypes.object.isRequired,
  onThemeChange: PropTypes.func.isRequired,
}

export default Theme;