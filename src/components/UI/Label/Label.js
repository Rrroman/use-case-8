import React from 'react';
import classes from './label.module.css';

export default function Label({ children, text, isError, errorMessage }) {
  return (
    <label className={classes.label}>
      <div className={classes.wrapper}>
        {children}
        {isError && <span className={classes.error}>{errorMessage}</span>}
      </div>
      <span>{text}</span>
    </label>
  );
}
