import axios from 'axios'
import * as constants from 'utils/constants'

export const getInstance = function(timeout = 30000) {
  let axiosConfig = {
    baseURL: constants.API_BASE,
    timeout: timeout,
    headers: {
      "Access-Control-Allow-Origin": '*',
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  }

  let instance = axios.create(axiosConfig)

  return instance
}
