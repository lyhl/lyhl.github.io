###  请求封装

### js

```js
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000000 
})

service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'Content-Type: application/json;charset:utf-8;'
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) 
    return Promise.reject(error)
  }
)
export const post = (url, data = {}) => {
  return service({
    url: url,
    method: 'post',
    data
  })
}

export const get = (url, params = {}) => {
  return service({
    url: url,
    method: 'get',
    params
  })
}

export default service

```

#### 使用

```js
import { post, get } from '@/utils/request'

export const getUsers = () => get('/users');

export const createUser = (params) => post('/users/create', params);
```

### ts

```ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseConfig: AxiosRequestConfig = {
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
};

class HttpClient {
    private readonly client: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.client = axios.create(config);
        this.client.interceptors.request.use(
            (config) => {
                // 在请求发送之前做一些处理，如添加 token 等
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        this.client.interceptors.response.use(
            ({ data }) => {
                // 在响应数据返回之前做一些处理，如解密数据等
                return data;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    public async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this.client.get<T>(url, config);
    }

    public async post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return await this.client.post<T>(url, data, config);
    }

    public async put<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return await this.client.put<T>(url, data, config);
    }

    public async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this.client.delete<T>(url, config);
    }
}

const httpClient = new HttpClient(baseConfig);

export default httpClient;
```

#### 使用

```js
import httpClient from './HttpClient';

interface User {
    name: string;
    email: string;
}

export const getUsers = () => httpClient.get('/users');

export const createUser = (user: User) => httpClient.post('/users/create', user);


```

