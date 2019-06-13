import { CHANGE_LOCALE, RESET_LOCALE } from '../actions/i18n';

export default {
  namespace: 'i18n',
  state: {
    locale: null
  },
  reducer: {
    [CHANGE_LOCALE](state, action) {
      return {
        ...state,
        locale: action.payload
      };
    },
    [RESET_LOCALE](state, action) {
      return {
        ...state,
        locale: null
      };
    }
  }
};
