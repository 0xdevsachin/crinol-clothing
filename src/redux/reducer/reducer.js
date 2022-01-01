import { combineReducers } from "redux";
import { CheckCartItems } from "../action/cart.utils";

const authReducer = (state = null, action)=>{
    if(action.type === "SET_AUTH_USER"){
        return {
            ...state,
            user : action.payload
        }
    }
    else if(action.type === "REMOVE_AUTH_USER"){
        return{
            ...state,
            user : null
        }
    }
    else{
        return state
    } 
}

const initialState = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = initialState, action)=>{
    if(action.type === 'TOOGLE_CART'){
        return {
            ...state,
            hidden : !state.hidden
        }
    }
    else if(action.type === 'ADD_TO_CART'){
        return {
            ...state,
            cartItems : CheckCartItems(state.cartItems, action.payload)
        }
    }
    else{
        return state
    }
}

const reducers = combineReducers({ authReducer, cartReducer })


export default reducers