import axios from 'axios'
import { baseURL } from 'config'

class HttpRequest {
  constructor(baseURL = baseURL) {
    this.baseURL = baseURL
    this.queue = {}
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        //
      }
    }
    return config
  }

  interceptors(instance, url) {
    //拦截器
    instance.interceptors.request.use(config => {
      //  添加全局的loading...
      // Spain 添加遮罩加载页面 Spin.show()
      if (!Object.keys(this.queue).length) {
        //Spain.show()
      }
      this.queue[url] = true
      return config
    }, err => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const {
        data,
        status
      } = res
      return {
        data,
        status
      }
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
