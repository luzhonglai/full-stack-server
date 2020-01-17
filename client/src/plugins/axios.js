"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const config = {
  baseURL: "/api",
  withCredentials: true, // Check cross-site Access-Control
  headers: {
    apptype: "pc",
    sign: "XnXv8gPAIdItFR0L15hsgfaBXcRQrM3/y1QQGAmWWZ8="
  }
};
const _axios = axios.create(config);
async function setConfigKey() {
  const {
    data: { data: sign }
  } = await _axios.post("/getsigns");
  config.headers.sign = sign;
}
setConfigKey();

_axios.interceptors.request.use(
  function(config) {
    console.log(config);
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
// eslint-disable-next-line
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
