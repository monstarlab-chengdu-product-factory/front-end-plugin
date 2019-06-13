/**
 * Call middleware for redux
 *
 * This middleware allows you to dispatch multiple action types.
 */
function createCallMiddleware() {
  return store => next => action => {
    if (!Array.isArray(action.type)) {
      return next(action);
    }

    const [requestType, successType, failureType] = action.type;
    next({ type: requestType });

    const promise = action.payload;
    if (!promise.then) {
      return next({ type: successType, payload: action.payload });
    }

    promise.then(
      res => next({ type: successType, payload: res }),
      err => next({ type: failureType, payload: err })
    );
  };
}

export default createCallMiddleware();
