import request from "./index";

export const getSmsCode = (params) => {
    return request({
        method: "get",
        url: "/user/getSmsCode",
        params
    })
}

export const loginApi = (data) => {
    return request({
        method: "post",
        url: "/user/login",
        data
    })
}