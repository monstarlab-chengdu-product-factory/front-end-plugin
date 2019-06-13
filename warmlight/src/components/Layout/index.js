import React from 'react';
import { withStyle } from '../utils';
import styles from './index.module.css';

const classname = withStyle(styles);

export function Half({ className, children }) {
  return <div className={classname('half', className)}>{children}</div>;
}

export function Divider({ className }) {
  return <div className={classname('divider', className)} />;
}

export function Separator({ symbol = ':', className }) {
  return <span className={classname('separator', className)}>{symbol}</span>;
}

export function Left({ children, className }) {
  return <div className={classname('left', className)}>{children}</div>;
}

export function Right({ children, className }) {
  return <div className={classname('right', className)}>{children}</div>;
}

export function Center({ children, className }) {
  return <div className={className('center', className)}>{children}</div>;
}

export function Flex({ children, className }) {
  return <div className={classname('flex', className)}>{children}</div>;
}

export function FlexItem({ children, className }) {
  return <div className={classname('flex-item', className)}>{children}</div>;
}

Flex.Item = FlexItem;
