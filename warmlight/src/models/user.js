import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/user';

export default {
  namespace: 'user',
  state: {
    loading: false,
    isAuthenticated: false,
    user: null
  },
  reducer: {
    [LOGIN_REQUEST](state, action) {
      return {
        ...state,
        loading: true
      };
    },
    [LOGIN_SUCCESS](state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      };
    },
    [LOGIN_FAILURE](state, action) {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null
      };
    }
  }
};
