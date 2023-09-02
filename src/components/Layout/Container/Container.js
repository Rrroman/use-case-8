import React from 'react';
import classes from './container.module.css';

export default function Container({ children }) {
  return <main className={classes.container}>{children}</main>;
}
