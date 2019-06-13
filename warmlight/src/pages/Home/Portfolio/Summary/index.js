import React from 'react';
import { FormattedMessage as Message } from 'react-intl';
import { Text, SubText, Title, SubTitle } from 'components/Typography';
import { Half, Divider, Separator } from 'components/Layout';
import WhiteSpace from 'components/WhiteSpace';
import { Currency, DatePeroid, DateTime } from 'components/Formatted';
import styles from './index.module.css';

export default function Summary({
  currency,
  amount,
  from,
  to,
  updatedAt,
  deadline,
  income,
  balance
}) {
  return (
    <section className={styles.summary}>
      <Title>
        <Message id="pages.portfolio.summary.currency" />
        <span>{` ( ${currency} ) `}</span>
      </Title>
      <WhiteSpace size="md" />
      <Title>
        <Message id="pages.portfolio.summary.accumulate" />
      </Title>
      <Text>
        <DatePeroid from={from} to={to} />
      </Text>
      <WhiteSpace size="sm" />
      <Title>
        <Currency value={amount} currency={currency} />
      </Title>
      <WhiteSpace size="sm" />
      <SubTitle>
        <Message id="pages.portfolio.summary.company" />
      </SubTitle>
      <Title>
        <Message id="pages.portfolio.summary.appname" />
      </Title>
      <WhiteSpace size="tn" />
      <Text>
        <Message id="pages.portfolio.summary.update" />
        <Separator />
        <DateTime value={updatedAt} />
      </Text>
      <Divider />
      <div className={styles.stat}>
        <Half>
          <Title>
            <Message id="pages.portfolio.summary.income" />
          </Title>
          <SubText>
            <Message id="pages.portfolio.summary.deadline" />
            <DateTime value={deadline} />
          </SubText>
          <WhiteSpace size="xs" />
          <Title>
            <Currency currency={currency} value={income} />
          </Title>
        </Half>
        <Half>
          <Title>
            <Message id="pages.portfolio.summary.balance" />
          </Title>
          <SubText>
            <Message id="pages.portfolio.summary.deadline" />
            <DateTime value={deadline} />
          </SubText>
          <WhiteSpace size="xs" />
          <Title>
            <Currency currency={currency} value={balance} />
          </Title>
        </Half>
      </div>
    </section>
  );
}
