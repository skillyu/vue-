import axios from 'axios';

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        //本地测试地址
        baseURL: 'http://192.168.1.118:8060',
        //打包地址
        //baseURL: 'http://122.51.121.122:8060',
        timeout: 5000
    });
    return instance(config);
}
