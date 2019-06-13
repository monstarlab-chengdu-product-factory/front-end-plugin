import React from 'react';
import styles from './index.module.css';

export default function WhiteSpace({ size = 'md' }) {
  return <div className={styles[`white-space--${size}`]} />;
}
