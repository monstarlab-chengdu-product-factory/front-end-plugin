import React from 'react';
import { connect } from 'react-redux';
import WhiteSpace from 'components/WhiteSpace';
import Summary from './Summary';
import TotalCash from './TotalCash';
import Remittance from './Remittance';
import Building from './Building';
import styles from './index.module.css';

class Portfolio extends React.PureComponent {
  render() {
    const {
      currency,
      from,
      to,
      amount,
      updatedAt,
      deadline,
      income,
      balance,
      cashes,
      remittances,
      buildings
    } = this.props;

    return (
      <main className={styles.container}>
        <Summary
          currency={currency}
          amount={amount}
          from={from}
          to={to}
          updatedAt={updatedAt}
          deadline={deadline}
          income={income}
          balance={balance}
        />
        <WhiteSpace size="md" />
        <TotalCash data={cashes} currency={currency} />
        <WhiteSpace size="md" />
        <Remittance data={remittances} currency={currency} />
        <WhiteSpace size="md" />
        <Building data={buildings} currency={currency} />
      </main>
    );
  }
}

export default connect(state => ({
  currency: state.portfolio.currency,
  from: state.portfolio.from,
  to: state.portfolio.to,
  amount: state.portfolio.amount,
  updatedAt: state.portfolio.updatedAt,
  deadline: state.portfolio.deadline,
  income: state.portfolio.income,
  balance: state.portfolio.balance,
  cashes: state.portfolio.cashes,
  remittances: state.portfolio.remittances,
  buildings: state.portfolio.buildings
}))(Portfolio);
