import {sendRequest} from "./request";

export function sendHomeData(){
  return sendRequest({
    url: '/home/multidata',
  })
}

export function sendHomeGoodsdata(type, page) {
  return sendRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
