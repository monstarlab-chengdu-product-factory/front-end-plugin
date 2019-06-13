/**
 * http request utils
 */

const defaultOpts = {
  baseURL: '/',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: {},
  data: {}
};

const errorMessages = {
  401: '没有权限'
};

function querystring(params) {
  return Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
}

function getQueryStringUrl(baseURL, url, params) {
  url = baseURL + url;
  url = url.replace(/\/{2,}/g, '/');
  return `${url}${url.includes('?') ? '&' : '?'}${querystring(params)}`;
}

function responseJSON(response) {
  const contentType = response.headers.get('Content-Type');
  return contentType && contentType.match(/application\/json/i);
}

function throwErrorwithResponse(response) {
  return function throwError(message) {
    message = message || errorMessages[response.status] || response.statusText;
    const error = new Error(message);
    error.name = response.status;
    error.response = response;
    throw error;
  };
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  // TODO: authentication
  throwErrorwithResponse(response)();
}

function resolveResponse(response) {
  if (responseJSON(response)) {
    return response.json().catch(throwErrorwithResponse(response));
  }
  return response.text().catch(throwErrorwithResponse(response));
}

function resolveData(result) {
  // TODO: resolve data
  return result;
}

function handleError(error) {
  // TODO: handle error
  throw error;
}

export default function request(url, opts) {
  opts = {
    ...defaultOpts,
    ...opts,
    headers: {
      ...defaultOpts.headers,
      ...opts.headers
    },
    body: JSON.stringify(opts.data)
  };
  url = getQueryStringUrl(opts.baseURL, url, opts.params);

  return fetch(url, opts)
    .then(checkStatus)
    .then(resolveResponse)
    .then(resolveData)
    .catch(handleError);
}

request.get = (url, opts = {}) => {
  opts.method = 'GET';
  return request(url, opts);
};

request.post = (url, opts = {}) => {
  opts.method = 'POST';
  return request(url, opts);
};

request.put = (url, opts = {}) => {
  opts.method = 'PUT';
  return request(url, opts);
};

request.delete = (url, opts = {}) => {
  opts.method = 'DELETE';
  return request(url, opts);
};
