import React from 'react';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <FormattedDate value={new Date()} />
        </p>
        <p>
          <Link to="/login">登录</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
