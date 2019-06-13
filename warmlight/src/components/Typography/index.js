import React from 'react';
import { FormattedMessage } from 'react-intl';
import { classname } from '../utils';
import styles from './index.module.css';

function createTypo(displayName, style) {
  function Typo({ inline = false, className, value, children }) {
    return React.createElement(
      inline ? 'span' : 'div',
      { className: classname(style, className) },
      value || children
    );
  }
  Typo.displayName = displayName || Typo.name || 'Typo';

  return Typo;
}

export const Title = createTypo('Title', styles.title);

export const SubTitle = createTypo('SubTitle', styles.subtitle);

export const Text = createTypo('Text', styles.text);

export const SubText = createTypo('SubText', styles.subtext);

export function H1({ value, children }) {
  return <h1 className={styles.h1}>{children || value}</h1>;
}

export function Message({ inline = false, ...props }) {
  return React.createElement(
    FormattedMessage,
    props,
    inline ? null : passthrough
  );
}

function passthrough(value) {
  return value;
}
