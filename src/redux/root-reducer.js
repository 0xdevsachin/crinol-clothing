// base reducer object represents entire state of our application

import { combineReducers } from "redux"

import userReducer from "./user/user.reducer"

export default combineReducers({
    user : userReducer
})
