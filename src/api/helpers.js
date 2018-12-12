import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export class HttpService {
  Get(url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data
      }).then((res) => {
        if (res) {
          //成功回调
          resolve(res);
        }
      }).catch((error) => {
        reject(error);
      })
    })
  }

  Post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }).then((res) => {
        if (res) {
          //成功回调
          resolve(res);
        }
      }).catch((error) => {
        reject(error);
      })
    })
  }
}
