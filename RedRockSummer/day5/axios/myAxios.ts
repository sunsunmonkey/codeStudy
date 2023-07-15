interface  Interceptor<T>{
    //类似于Promise
    onFulfilled?: (value: T) => T | Promise<T>;
    onRejected?: (error: any) => any;
}

class MyAxios{
    //拦截器数组
    private interceptors: Interceptor<Request>[] = [];
    private responseInterceptors: Interceptor<Response>[] = [];

    constructor(private baseUrl: string = '') {}


    public request(url:string, options:RequestInit):Promise<Response>{
        //配置信息
        const requestOptions: RequestInit = {
            ...options,
            headers: {
              ...options.headers,
              'Content-Type': 'application/json',
            },
        }
    
    const request = new Request(this.baseUrl + url, requestOptions)

    //先创建一个promise对象来先执行请求拦截
    let chain = Promise.resolve(request);
    
    //执行请求拦截
    this.interceptors.forEach((interceptor) => {
        chain = chain.then((req) => interceptor.onFulfilled?.(req) || req);
    });

    //正式网络请求，同时返回Promise<Response>
    let ResponseChain:Promise<Response> = chain.then((req) => fetch(req)) ;

    //执行响应拦截
    this.responseInterceptors.forEach((interceptor) => {
        ResponseChain = ResponseChain.then((res) => interceptor.onFulfilled?.(res) || res);
      });
       return ResponseChain ;
     }



      //几个方法改掉method参数即可
     public get(url: string, options: RequestInit = {}): Promise<Response> {
        return this.request(url, { ...options, method: 'GET' });
      }
    
      public post(url: string, body: any, options: RequestInit = {}): Promise<Response> {
        return this.request(url, { ...options, method: 'POST', body: JSON.stringify(body) });
      }
    
      public put(url: string, body: any, options: RequestInit = {}): Promise<Response> {
        return this.request(url, { ...options, method: 'PUT', body: JSON.stringify(body) });
      }
    
      public delete(url: string, options: RequestInit = {}): Promise<Response> {
        return this.request(url, { ...options, method: 'DELETE' });
      }

      //添加拦截器
      public addInterceptor(interceptor: Interceptor<Request>): void {
        this.interceptors.push(interceptor);
      }
    
      public addResponseInterceptor(interceptor: Interceptor<Response>): void {
        this.responseInterceptors.push(interceptor);
      }
}

export {}