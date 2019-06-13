import React, { Fragment } from 'react';
import { FormattedDate, FormattedNumber } from 'react-intl';

export function Currency({ currency, value }) {
  return (
    <Fragment>
      <FormattedNumber
        style="currency" //eslint-disable-line
        currency={currency}
        value={value}
      />
      <span> {currency}</span>
    </Fragment>
  );
}

export function DatePeroid({ from, to, dash = ' - ' }) {
  return (
    <Fragment>
      <FormattedDate value={from} year="numeric" month="short" day="numeric" />
      <span>{dash}</span>
      <FormattedDate value={to} month="short" day="numeric" />
    </Fragment>
  );
}

export function DateTime({ value, month = true, day = true, prefix }) {
  const format = {
    year: 'numeric',
    month: month ? 'short' : undefined,
    day: month && day ? 'numeric' : undefined
  };
  return (
    <Fragment>
      <span>{prefix}</span>
      <FormattedDate value={value} {...format} />
    </Fragment>
  );
}
