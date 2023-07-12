import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios'
import { RequestConfig, RequestInterceptors } from './types'

class Request {
    instance:AxiosInstance
      // 拦截器对象
    interceptorsObj?: RequestInterceptors
    abortControllerMap: Map<string, AbortController>

    constructor(config: RequestConfig){
        this.instance = axios.create(config)

        this.interceptorsObj = config.interceptors

        this.instance.interceptors.request.use(
            (res:InternalAxiosRequestConfig)=>{
                console.log('全局请求拦截器')
                return res.data
            }
        )

            // 使用实例拦截器
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors,
            this.interceptorsObj?.requestInterceptorsCatch,
        )
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch,
        )
        
        
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
              console.log('全局响应拦截器')
              return res.data
            },
            (err: any) => err,
          )
    }

    request<T>(config:  RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
          // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
          if (config.interceptors?.requestInterceptors) {
            config = config.interceptors.requestInterceptors(config as any)
          }
          this.instance
            .request<any, T>(config)
            .then(res => {
              // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
              if (config.interceptors?.responseInterceptors) {
                res = config.interceptors.responseInterceptors<T>(res)
              }
      
              resolve(res)
            })
            .catch((err: any) => {
              reject(err)
            })
        })
      }
      
      cancelAllRequest() {
        for (const [, controller] of this.abortControllerMap) {
          controller.abort()
        }
        this.abortControllerMap.clear()
      }  

      cancelRequest(url: string | string[]) {
        const urlList = Array.isArray(url) ? url : [url]
        for (const _url of urlList) {
          this.abortControllerMap.get(_url)?.abort()
          this.abortControllerMap.delete(_url)
        }
      }
}   

export default Request

export { RequestConfig, RequestInterceptors }