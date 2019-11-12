import axios from 'axios'

const baseURL1 = "http://123.207.32.32:8000/api/vip"
const baseURL2 = "http://106.54.54.237:8000/api/v1"

export function sendRequest(config) {
  const instance = axios.create({
    baseURL: baseURL1,
    timeout: 5000
  })

  //拦截请求
  instance.interceptors.request.use(config=> {
    // console.log(config);
    return config;
  }, err => {
    // console.log(err);
  })

  //拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  }, err => {
    // console.log(err);
  })

  return instance(config)
}
