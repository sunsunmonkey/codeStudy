interface  Interceptor<T>{
    onFulfilled?: (value: T) => T | Promise<T>;
    onRejected?: (error: any) => any;
}

class MyAxios{
    private interceptors: Interceptor<Request>[] = [];
    private responseInterceptors: Interceptor<Response>[] = [];

    constructor(private baseUrl: string = '') {}

    public request(url:string, options:RequestInit):Promise<Response>{
        const requestOptions: RequestInit = {
            ...options,
            headers: {
              ...options.headers,
              'Content-Type': 'application/json',
            },
        }
    const request = new Request(this.baseUrl + url, requestOptions)
    let chain = Promise.resolve(request);

    this.interceptors.forEach((interceptor) => {
        chain = chain.then((req) => interceptor.onFulfilled?.(req) || req);
    });

    let ResponseChain:Promise<Response> = chain.then((req) => fetch(req)) ;

    this.responseInterceptors.forEach((interceptor) => {
        ResponseChain = ResponseChain.then((res) => interceptor.onFulfilled?.(res) || res);
      });
       return ResponseChain ;
    }
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
    
      public addInterceptor(interceptor: Interceptor<Request>): void {
        this.interceptors.push(interceptor);
      }
    
      public addResponseInterceptor(interceptor: Interceptor<Response>): void {
        this.responseInterceptors.push(interceptor);
      }
}

const fetchWrapper = new MyAxios('https://api.example.com');

fetchWrapper.addInterceptor({
  onFulfilled: (request) => {
    // Modify request object or perform other operations
    console.log('Request interceptor');
    return request;
  },
});

fetchWrapper.addResponseInterceptor({
  onFulfilled: (response) => {
    // Modify response object or perform other operations
    console.log('Response interceptor');
    return response;
  },
});

fetchWrapper.get('/users')
  .then((response) => {
    // Process the response
    console.log('GET /users response:', response);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });

export {}