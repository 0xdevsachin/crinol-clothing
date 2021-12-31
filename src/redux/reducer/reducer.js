import { combineReducers } from "redux";


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


const reducers = combineReducers({ authReducer })


export default reducers