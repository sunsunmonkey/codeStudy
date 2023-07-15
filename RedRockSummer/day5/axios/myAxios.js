
//编译后的
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MyAxios = /** @class */ (function () {
    function MyAxios(baseUrl) {
        if (baseUrl === void 0) { baseUrl = ''; }
        this.baseUrl = baseUrl;
        this.interceptors = [];
        this.responseInterceptors = [];
    }
    MyAxios.prototype.request = function (url, options) {
        var requestOptions = __assign(__assign({}, options), { headers: __assign(__assign({}, options.headers), { 'Content-Type': 'application/json' }) });
        var request = new Request(this.baseUrl + url, requestOptions);
        var chain = Promise.resolve(request);
        this.interceptors.forEach(function (interceptor) {
            chain = chain.then(function (req) { var _a; return ((_a = interceptor.onFulfilled) === null || _a === void 0 ? void 0 : _a.call(interceptor, req)) || req; });
        });
        var ResponseChain = chain.then(function (req) { return fetch(req); });
        this.responseInterceptors.forEach(function (interceptor) {
            ResponseChain = ResponseChain.then(function (res) { var _a; return ((_a = interceptor.onFulfilled) === null || _a === void 0 ? void 0 : _a.call(interceptor, res)) || res; });
        });
        return ResponseChain;
    };
    MyAxios.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, __assign(__assign({}, options), { method: 'GET' }));
    };
    MyAxios.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, __assign(__assign({}, options), { method: 'POST', body: JSON.stringify(body) }));
    };
    MyAxios.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, __assign(__assign({}, options), { method: 'PUT', body: JSON.stringify(body) }));
    };
    MyAxios.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, __assign(__assign({}, options), { method: 'DELETE' }));
    };
    MyAxios.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    MyAxios.prototype.addResponseInterceptor = function (interceptor) {
        this.responseInterceptors.push(interceptor);
    };
    return MyAxios;
}());
var fetchWrapper = new MyAxios('https://api.example.com');
fetchWrapper.addInterceptor({
    onFulfilled: function (request) {
        // Modify request object or perform other operations
        console.log('Request interceptor');
        return request;
    },
});
fetchWrapper.addResponseInterceptor({
    onFulfilled: function (response) {
        // Modify response object or perform other operations
        console.log('Response interceptor');
        return response;
    },
});
fetchWrapper.get('/users')
    .then(function (response) {
    // Process the response
    console.log('GET /users response:', response);
})
    .catch(function (error) {
    // Handle errors
    console.error('Error:', error);
});
