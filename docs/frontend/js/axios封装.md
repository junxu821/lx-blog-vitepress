# 全局拦截处理
# 1.js版
```javascript
import axios from 'axios'
const service = axios.create({
  baseURL: '/',
  timeout: 500000000000 // request timeout
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

```
# 2.TS版
```typescript
import axios from 'axios'
import type {AxiosInstance,AxiosRequestConfig,AxiosResponse} from 'axios'

// import { ElLoading } from 'element-plus';
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
const DEAFULT_LOADING = true

// 定义接口，四个函数类型
interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?:(config:AxiosRequestConfig) => AxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestInterceptorCatcher?:(error:any) => any
  responseInterceptor?:(res:T) => T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseInterceptorCatcher?:(error:any) => any
}
// 继承AxiosRequestConfig接口，增加HYRequestInterceptors接口类型
interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?:HYRequestInterceptors<T>
  showLoading?: boolean
}
// 使用class进行封装
class HYRequest{
  instance:AxiosInstance
  interceptors?:HYRequestInterceptors
  showLoading: boolean
//   loading?:ILoadingInstance
  // 构造器
  constructor(config:HYRequestConfig){
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    /**1.从config中取出的拦截器是对应实例的拦截器 */
    // 使用请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatcher
    )
    // 使用响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatcher
    )

    /**2.添加所有实例都有的拦截器 */
    this.instance.interceptors.request.use(
      (config)=>{
        // if (this.showLoading) {
        //   this.loading = ElLoading.service({
        //     lock:true,
        //     text:'正在加载中...',
        //     background:'rgba(0,0,0,0.5)'
        //   });
        // }
        
        return config
      },
      (err)=>{
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res)=>{
        // 讲loading移除
        // this.loading?.close();

        return res.data
      },
      (err)=>{
        // 讲loading移除
        // this.loading?.close();

        return err
      }
    )
  }

  request<T>(config:HYRequestConfig<T>):Promise<T> {
    return new Promise((resolve,reject) => {
      // 单个请求对请求config的处理
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    // 判断是否需要显示loading
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }

    this.instance
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .request<any,T>(config)
      .then((res) => {
      // 1.单个请求对返回数据的处理
      if (config.interceptors?.responseInterceptor) {
        // res = config.interceptors.responseInterceptor(res)
      }
      // 2.将showLoading设置成true，这样不会影响到下一个请求
      this.showLoading = DEAFULT_LOADING;
      // 3.将结果resolve返回出去
      resolve(res)
    }).catch(err => {
      // 将showLoading设置成true，这样不会影响到下一个请求
      this.showLoading = DEAFULT_LOADING;
      reject(err)
      return err
    })
    })
  }

  post<T>(config:HYRequestConfig<T>):Promise<T> {
    return this.request<T>({...config, method:'post'})
  }

  delete<T>(config:HYRequestConfig<T>):Promise<T> {
    return this.request<T>({...config, method:'delete'})
  }

  patch<T>(config:HYRequestConfig<T>):Promise<T> {
    return this.request<T>({...config, method:'patch'})
  }

  get<T>(config:HYRequestConfig<T>):Promise<T> {
    return this.request<T>({...config, method:'get'})
  }

}

export default HYRequest;
```
