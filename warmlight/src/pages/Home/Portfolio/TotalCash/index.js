import React from 'react';
import { FormattedMessage as Message } from 'react-intl';
import { DatePeroid, Currency } from 'components/Formatted';
import List, { ListHeader, ListItem } from 'components/List';
import { Title, SubTitle, SubText } from 'components/Typography';
import ICON_CASH from 'assets/icons/icon_cash.png';

const header = (
  <ListHeader
    thumb={ICON_CASH}
    body={
      <Title>
        <Message id="pages.portfolio.cash.total" />
      </Title>
    }
    extra={
      <SubTitle>
        <Message id="pages.portfolio.cash.view" />
      </SubTitle>
    }
  />
);

export default function TotalCash({ data, currency }) {
  return (
    <List icon={ICON_CASH} header={header}>
      {data.map((rec, i) => (
        <ListItem
          key={i}
          body={
            <SubText>
              <DatePeroid from={rec.from} to={rec.to} />
            </SubText>
          }
          extra={<Currency currency={currency} value={rec.amount} />}
        />
      ))}
    </List>
  );
}
