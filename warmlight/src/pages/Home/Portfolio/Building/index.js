import React from 'react';
import { SubTitle, Title, Message, SubText } from 'components/Typography';
import { DatePeroid, Currency, DateTime } from 'components/Formatted';
import { Flex, FlexItem, Separator } from 'components/Layout';
import { ListHeader, ListItem } from 'components/List';
import ICON_BUILDING from 'assets/icons/icon_portfolio.png';
import IMAGE_NOIMAGE from 'assets/images/no_image.png';
import styles from './index.module.css';

function MediaCard({
  currency,
  thumb,
  info,
  memo,
  addr,
  renting,
  waiting,
  time,
  amount,
  update
}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.thumb}>
          <img src={thumb || IMAGE_NOIMAGE} alt="building" />
        </div>
        <div className={styles.info}>
          <div className={styles.row}>
            <SubTitle inline>
              <Message id="pages.portfolio.building.info" />
            </SubTitle>
            <Separator />
            <Title inline>{info}</Title>
          </div>
          <div className={styles.row}>
            <SubTitle inline>
              <Message id="pages.portfolio.building.memo" />
            </SubTitle>
            <Separator />
            <Title inline>{memo}</Title>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <SubTitle className={styles.line}>
          <Message id="pages.portfolio.building.addr" inline />
          <Separator />
          <span>{addr}</span>
        </SubTitle>
        <SubTitle className={styles.line}>
          <Flex>
            <FlexItem>
              <Message id="pages.portfolio.building.renting" inline />
              <Separator />
              <span>{renting}</span>
              <Message id="pages.portfolio.building.unit" inline />
            </FlexItem>
            <FlexItem>
              <Message id="pages.portfolio.building.waiting" inline />
              <Separator />
              <span>{waiting}</span>
              <Message id="pages.portfolio.building.unit" inline />
            </FlexItem>
          </Flex>
        </SubTitle>
        <SubTitle className={styles.line}>
          <Message id="pages.portfolio.building.time" inline />
          <Separator />
          <DatePeroid from={time.from} to={time.to} />
        </SubTitle>
        <ListItem
          className={styles.line}
          extra={
            <Title inline>
              <Currency value={amount} currency={currency} />
            </Title>
          }
        >
          <SubTitle inline>
            <Message id="pages.portfolio.building.view" />
          </SubTitle>
        </ListItem>
      </div>
      <SubText className={styles['footer']}>
        <Message id="pages.portfolio.building.update" inline />
        <Separator />
        <DateTime value={update} />
      </SubText>
    </div>
  );
}

export default function Building({ data, currency }) {
  return (
    <section className={styles.building}>
      <ListHeader
        className={styles.header}
        thumb={ICON_BUILDING}
        arrow={null}
        body={
          <Title>
            <Message id="pages.portfolio.building.title" />
          </Title>
        }
      />
      {data.map((rec, i) => (
        <MediaCard key={i} currency={currency} {...rec} />
      ))}
    </section>
  );
}
