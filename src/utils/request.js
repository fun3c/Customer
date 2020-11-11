import axios from 'axios'
import baseUrl from '/baseUrl'
const httpAxios=axios.create()


let instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [function (data) {
      return data;
    }],
    transformResponse: [function (data) {
      return data
    }],
    auth: {},
    responseType: 'json',
    maxContentLength: 5000,
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
    // showMessage:false
  })
  
// 添加请求拦截器
httpAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return {
      ...config,
      headers:{
        "x-header":true,
      }
    };
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么

    return Promise.reject(error);
  });

export default {
    get(url,params={}){
        return httpAxios.get(url,{params})
    },
    post(url,data={}){
        return httpAxios.post(url,data)
    },
}