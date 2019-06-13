import React from 'react';
import { FormattedMessage as Message } from 'react-intl';
import { DateTime, Currency } from 'components/Formatted';
import List, { ListHeader, ListItem } from 'components/List';
import { Title, SubTitle, SubText } from 'components/Typography';
import ICON_REMIT from 'assets/icons/icon_transfer.png';

const header = (
  <ListHeader
    thumb={ICON_REMIT}
    extra={
      <SubTitle>
        <Message id="pages.portfolio.remittance.view" />
      </SubTitle>
    }
  >
    <Title>
      <Message id="pages.portfolio.remittance.total" />
    </Title>
  </ListHeader>
);

export default function TotalCash({ data, currency }) {
  return (
    <List header={header}>
      {data.map((rec, i) => (
        <ListItem
          key={i}
          body={
            <SubText>
              <DateTime
                prefix={`${rec.status} - `}
                value={rec.date}
                day={false}
              />
            </SubText>
          }
          extra={
            <Title>
              <Currency currency={currency} value={rec.amount} />
            </Title>
          }
        />
      ))}
    </List>
  );
}
