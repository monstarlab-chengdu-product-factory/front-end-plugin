import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { IntlProvider, addLocaleData } from 'react-intl';

export default class Application {
  constructor({ initilaState = {}, defaultLocale = navigator.language } = {}) {
    this.$state = initilaState;
    this.$locale = defaultLocale;
    this.$messages = {};
    this.$middlewares = [];
    this.$reducers = {};
    this.$router = null;
    this.$store = null;
    this.$root = null;
    this.$el = null;

    // ============== hacking start ===============
    const app = this;
    Object.defineProperty(window, 'locale', {
      get() {
        return window.__LOCALE__ || '';
      },
      set(val) {
        window.__LOCALE__ = val;
        app.i18n(val);
      }
    });
    // ============== hacking end =================
  }

  use(middleware) {
    this.$middlewares.push(resolveModule(middleware));
  }

  router(router) {
    this.$router = resolveModule(router);
  }

  locale(locale, messages) {
    const prefix = locale.split('-')[0];
    this.$messages[locale] = resolveModule(messages);
    addLocaleData(resolveModule(require('react-intl/locale-data/' + prefix)));
  }

  model(model) {
    const { namespace, state, reducer, reducers } = resolveModule(model);
    this.$reducers[namespace] = createReducer(state, reducers || reducer || {});
  }

  mount(el) {
    this.$el = typeof el === 'string' ? document.querySelector(el) : el;
    this.$store = configureStore(
      this.$reducers,
      this.$state,
      this.$middlewares
    );
    this.$root = createRootElement(
      this.$store,
      this.$router,
      this.$locale,
      this.$messages
    );
    return render(this.$root, this.$el);
  }

  // change locale
  i18n(locale) {
    this.$store.dispatch({ type: 'CHANGE_LOCALE', payload: locale });
  }
}

function resolveModule(module) {
  return module && module.__esModule ? module.default : module;
}

function createReducer(initilaState, reducerMap) {
  return function reducer(state = initilaState, action) {
    const handler = reducerMap[action.type];
    return handler ? handler(state, action) : state;
  };
}

function configureStore(reducerMap, preloadedState = {}, middlewares = []) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers(reducerMap),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

function createRootElement(store, router, locale, messages) {
  const IntlComponent = props => {
    const _locale = props.locale || locale;
    return React.createElement(
      IntlProvider,
      { locale: _locale, messages: getLocaleMessages(_locale, messages) },
      router()
    );
  };
  const ConnectedIntl = connect(state => state.i18n || {})(IntlComponent);

  return React.createElement(
    Provider,
    { store },
    React.createElement(ConnectedIntl)
  );
}

function getLocaleMessages(locale, messages) {
  const prefix = locale.split('-')[0];
  return messages[locale] || messages[prefix] || {};
}
