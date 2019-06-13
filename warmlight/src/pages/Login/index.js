import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { login } from '../../actions/user';
import IMAGE_LOGO from '../../assets/images/no_image.png';
import ICON_EYE_CLOSE from '../../assets/icons/icon_eye_closed.png';
import ICON_EYE_OPEN from '../../assets/icons/icon_eye_opened.png';
import styles from './index.module.css';

class Login extends React.PureComponent {
  state = {
    showPassword: false
  };

  $form = React.createRef();

  handlePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleSubmit = e => {
    e.preventDefault();

    const form = this.$form.current;
    const username = form.username.value;
    const password = form.password.value;
    this.props.dispatch(login(username, password));
  };

  render() {
    const { isAuthenticated, location, intl } = this.props;
    const { showPassword } = this.state;
    const { referer } = location.state || { referer: { pathname: '/' } };

    if (isAuthenticated) {
      return <Redirect to={referer} />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={IMAGE_LOGO} alt="logo" />
        </div>
        <div className={styles.title}>
          <FormattedMessage id="pages.login.title" />
        </div>
        <form className={styles.form} ref={this.$form}>
          <div className={styles['form-item']}>
            <label>
              <FormattedMessage id="pages.login.form.username" />
            </label>
            <input
              name="username"
              placeholder={intl.formatMessage({
                id: 'pages.login.form.username.placeholder'
              })}
            />
          </div>
          <div className={styles['form-item']}>
            <label>
              <FormattedMessage id="pages.login.form.password" />
            </label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={intl.formatMessage({
                id: 'pages.login.form.password.placeholder'
              })}
            />
            <img
              className={styles.toggle}
              src={showPassword ? ICON_EYE_OPEN : ICON_EYE_CLOSE}
              alt="icon"
              onClick={this.handlePasswordVisibility}
            />
          </div>
          <div className={styles['form-item']}>
            <button onClick={this.handleSubmit}>
              <FormattedMessage id="pages.login.form.submit" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  isAuthenticated: !!state.user.isAuthenticated
}))(injectIntl(Login));
