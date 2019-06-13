import React, { Fragment } from 'react';
import { withStyle } from '../utils';
import { Icon, Arrow } from '../Shape';
import { If } from '../Fragment';
import styles from './index.module.css';

const classname = withStyle(styles);

export default function List({ className, header, body, children }) {
  return (
    <section className={classname('list', className)}>
      {header}
      <div className={styles.children}>{children || body}</div>
    </section>
  );
}

export function Cell({ thumb = null, extra, arrow = 'right', body, children }) {
  return (
    <Fragment>
      <If value={thumb}>
        <Icon src={thumb} size="md" />
      </If>
      <div className={styles.body}>{children || body}</div>
      <div className={styles.extra}>{extra}</div>
      <If value={arrow}>
        <Arrow dir={arrow} size="md" />
      </If>
    </Fragment>
  );
}

export function ListHeader({ className, ...props }) {
  return (
    <header className={classname('header', className)}>
      <Cell {...props} />
    </header>
  );
}

export function ListItem({ className, ...props }) {
  return (
    <div className={classname('item', className)}>
      <Cell {...props} />
    </div>
  );
}

List.Header = ListHeader;
List.Item = ListItem;
