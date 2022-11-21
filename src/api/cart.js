import request from "./index";

export const getCart = () => {
    return request({
        method: 'get',
        url: '/cart/all'
    })
}