import * as actionsTypes from './actionType'

export function addToCart(product){
    return{type:actionsTypes.ADD_TO_CART,payload:product}
}
export function removeToCart(product){
    return{type:actionsTypes.REMOVE_TO_CART,payload:product}
}