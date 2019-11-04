import {sendRequest} from "./request";

export function sendHomeData(){
  return sendRequest({
    url: '/home/multidata',
  })
}
