import {ADD_NEW_CART, ADD_OLD_CART} from "./mutations-type";

export default {
  [ADD_OLD_CART] (state, payload) {
    payload.count++
  },
  [ADD_NEW_CART] (state, payload) {
    state.cartList.push(payload)
  }
}
