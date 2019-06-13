import App from './utils/framework';
import * as serviceWorker from './serviceWorker';
import './index.css';

const app = new App();

// redux middlewares
app.use(require('redux-thunk'));
app.use(require('./middlewares/call'));

// redux reducers
app.model(require('./models/i18n'));
app.model(require('./models/user'));
app.model(require('./models/portfolio'));

// router
app.router(require('./router'));

// i18n
app.locale('zh', require('./locales/zh-CN'));
app.locale('en', require('./locales/en-US'));

// render
app.mount('#root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
