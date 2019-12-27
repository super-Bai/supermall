import {ADD_NEW_CART, ADD_OLD_CART} from "./mutations-type";

export default {
  addCart ({state, commit}, payLoad) {
    let tempPay = state.cartList.find(item => item.iid == payLoad.iid)

    if (tempPay) {
      commit(ADD_OLD_CART, tempPay)
    } else {
      payLoad.count = 1
      payLoad.isSelection = false
      commit(ADD_NEW_CART, payLoad)
    }
  }
}
