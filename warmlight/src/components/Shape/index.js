import React from 'react';
import styles from './index.module.css';

function getClassName(...names) {
  return names.map(name => styles[name]).join(' ');
}

export function Arrow({ dir = 'right', size = 'md' }) {
  const cls = getClassName('arrow', `arrow--${dir}`, `arrow--${size}`);
  return <span className={cls} />;
}

export function Icon({ src, size = 'md' }) {
  return (
    <span className={styles[`icon--${size}`]}>
      <img src={src} alt="icon" />
    </span>
  );
}
