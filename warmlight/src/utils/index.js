/**
 * common utils
 */

/**
 * querystring
 */
export const querystring = {
  // convert query string to object
  parse(str) {
    return str
      .replace(/^[?#&]/, '')
      .split('&')
      .reduce((query, s) => {
        const [k, v] = s.split('=', 2);
        query[k] = v || '';
        return query;
      }, {});
  },
  // convert object to query string
  stringify(query) {
    return Object.keys(query)
      .filter(k => query[k] !== undefined && query[k] !== null)
      .map(k => `${k}=${encodeURIComponent(query[k])}`)
      .join('&');
  }
};

// alias querystring
export const qs = querystring;

/**
 *
 * high-order component to prevent unmounted components setState
 *
 * @param {React.Component} Component
 */
export function withSafeUnmount(Component) {
  const isMounted = Symbol('Component#isMounted');
  const displayName = Component.displayName || Component.name || 'Component';

  class WithSafeUnmount extends Component {
    componentDidMount() {
      this[isMounted] = true;
      super.componentDidMount();
    }

    componentWillUnmount() {
      this[isMounted] = false;
      super.componentWillUnmount();
    }

    setState(...args) {
      if (this[isMounted]) {
        super.setState(...args);
      }
    }
  }

  WithSafeUnmount.displayName = `withSafeUnmount(${displayName})`;

  return WithSafeUnmount;
}
