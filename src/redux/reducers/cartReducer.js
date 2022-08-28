import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";


export default function cartReducer(state=initialState.cart,action){

    switch(action.type){

        case actionTypes.ADD_TO_CART:
            let addedItem=state.find(c=>c.product.id===action.payload.product.id);
            if (addedItem){
                let newstate = state.map(cartItem=>{
                    if (cartItem.product.id===action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem;
                })
                return newstate;
                
            }else return [...state,{...action.payload}] //dont have to "push". you must use like this from redux

       
        case actionTypes.REMOVE_TO_CART:
            let newstate=state.filter(c=>c.product.id!==action.payload.id);
            return newstate

        default:
            return state;
        

    }

}