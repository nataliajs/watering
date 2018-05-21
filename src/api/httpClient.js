import axios from 'axios'
import * as constants from '../constants'

export const getInstance = function(timeout = 30000) {
  let axiosConfig = {
    baseURL: constants.API_BASE,
    timeout: timeout,
    headers: {
      "Access-Control-Allow-Origin": '*',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE'
    },
  }

  let instance = axios.create(axiosConfig)

  //instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

  return instance
}
