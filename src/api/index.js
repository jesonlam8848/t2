import axios from 'axios'
import Cookie from 'js-cookie';
//  创建axios实例
const request = axios.create({
    baseURL: "http://huruqing.cn:3003",
    // 为了触发腾讯云webify更新而写的注释
    // timeout: 10000
});

//  请求拦截
request.interceptors.request.use(
    (config) => {
        config.headers['user-token']=Cookie.get('token')
        // console.log("请求配置", config);
        //  业务逻辑
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

//  响应拦截
// request.interceptors.response.use(
//     (config) => {
//         console.log("响应结果", config);
//     },
//     (error) => {}
// )

export default request